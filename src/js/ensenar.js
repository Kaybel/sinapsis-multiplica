const topics = [
    "A/B Testing",
    "accesibility",
    "agile",
    "angular",
    "artificial intelligence",
    "augmented reality",
    "axure",
    "cardsorting",
    "content manager",
    "css",
    "figma",
    "gestal priciple",
    "google analytics",
    "HCI",
    "html",
    "illustrator",
    "information architecture",
    "interaction design",
    "invision",
    "jquery",
    "json",
    "machine learning",
    "marvel",
    "photoshop",
    "php",
    "prototype",
    "rails",
    "responsive design",
    "ruby",
    "scrum",
    "sketch",
    "sublime text",
    "trello",
    "ui",
    "user research",
    "ux",
    "vue",
    "vui",
    "wordpress"
]

const city = [
    "Barcelina",
    "Berlín",
    "Bogotá",
    "Buenos Aires",
    "Ciudad de México",
    "Guayaquil",
    "Lima",
    "Madrid",
    "Miami",
    "Medellin",
    "Santo Domingo",
    "San Francisco",
    "Santiago de Chile"
]

function autocomplete(inp, arr) {
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        let cont, box, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        cont = document.createElement("div");
        cont.setAttribute("id", this.id + "autocomplete-list");
        cont.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(cont);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                box = document.createElement("div");
                /*make the matching letters bold:*/
                box.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                box.innerHTML += arr[i].substr(val.length);
                box.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                box.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                cont.appendChild(box);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {

        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}

// const url = 'api/topic.json';

// fetch(url)
//     .then(
//         function(response) {
//             if (response.status !== 200) {
//                 console.warn('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }
//             response.json().then(function(data) {
//                 console.log(data)
//                 for (let i = 0; i < data.length; i++) {
//              
//                 }
//             });
//         }
//     )
//     .catch(function(err) {
//         console.error('Fetch Error -', err);
//     });

autocomplete(document.getElementById("inputTemas"), topics)
autocomplete(document.getElementById("inputLugar"), city)

/* ====  FORM   ===== */

// var config = {
//     apiKey: "AIzaSyBSE_WBV8P94cXkg9K0DmENNdkuuEvRH2k",
//     authDomain: "sinapsis-multiplica.firebaseapp.com",
//     databaseURL: "https://sinapsis-multiplica.firebaseio.com",
//     projectId: "sinapsis-multiplica",
//     storageBucket: "sinapsis-multiplica.appspot.com",
//     messagingSenderId: "698338914142"
// };
// firebase.initializeApp(config);

function guardarCursos() {
    const tema = document.getElementById('inputTemas').value
    const titulo = document.getElementById('inputTaller').value
    const descripcion = document.getElementById('textareaDescripcion').value
    const formatoOnline = document.getElementById('radioOnline').value
    const formatoPresencial = document.getElementById('radioPresencial').value
        // const fechas = document.getElementById('fechas').value
    const lugar = document.getElementById('inputLugar').value

    const db = firebase.firestore();
    db.collection('evento').add({
            tema: tema,
            titulo: titulo,
            descripcion: descripcion,
            formatoOnline: formatoOnline,
            formatoPresencial: formatoPresencial,
            // fechas: fechas,
            lugar: lugar
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);

            document.getElementById('inputTemas').value = '';
            document.getElementById('inputTaller').value = '';
            document.getElementById('textareaDescripcion').value = '';
            document.getElementById('radioOnline').value = '';
            document.getElementById('radioPresencial').value = '';
            // document.getElementById('fechas').value = '';
            document.getElementById('inputLugar').value = '';
        })
        .catch(function(error) {
            console.log("Error adding document: ", error);
        });
}