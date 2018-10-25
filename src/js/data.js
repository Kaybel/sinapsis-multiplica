Promise.all([
    fetch('api/city.json'),
    fetch('api/topic.json')
]).then(
    (responses) => {
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }
).then((responsesJsons) => {
    // console.log(responsesJsons);
    let cities = responsesJsons[0];
    console.log(cities.city);
    dropdown(responsesJsons[0]);
    let topics = responsesJsons[1];
    filterTopics(responsesJsons[1]);


}).catch(
    (error) => {
        console.log(error)
    }
);


function dropdown(cities) {
    Object.keys(cities).forEach(element => {
        console.log();
        let contenedor = document.getElementById('dropdownSede');
        let h1 = document.getElementById('enabled');
        let id = element.id;
        console.log(city.id);
        // let template = `<button class="dropdown-item" type="button">${id}</button>`;
        let btn = document.createElement('button');
        if (name === 'Santiago de Chile') {
            btn.className = 'dropdown-item';
            btn.setAttribute('onclick', showCourses());
        } else {
            btn.className = 'dropdown-item disabled';
        };
        btn.type = 'button';
        let text = document.createTextNode(id);
        // console.log(text)
        btn.appendChild(text);
        contenedor.appendChild(btn);
    });
};

function showCourses() {

}


function filterTopics() {

}
const topics = 'api/topic.json';
const city = "api/city.json";

// function getData(url) {
//     return fetch(url, {
//             method: "GET",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then((response) => response.json())
//         .then((responseData) => {
//             // console.warn(responseData);
//             console.log(responseData);
//             return responseData;

//         })
//         .catch(error => console.warn(error));
// }

// getData(topics).then(response => {
//     autocomplete(document.getElementById("inputTemas"), response.topics)
// });
// getData(city).then(response => {
//     autocomplete(document.getElementById("dropdownSede"), response.city.name)
// });

function dropdown(city) {
    city.forEach(element => {
        console.log();
        let contenedor = document.getElementById('dropdownSede');
        let h1 = document.getElementById('enabled');
        let id = element.id;
        console.log(city.id);
        // let template = `<button class="dropdown-item" type="button">${id}</button>`;
        let btn = document.createElement('button');
        if (name === 'Santiago de Chile') {
            btn.className = 'dropdown-item';
            btn.setAttribute('onclick');
        } else {
            btn.className = 'dropdown-item disabled';
        };
        btn.type = 'button';
        let text = document.createTextNode(id);
        // console.log(text)
        btn.appendChild(text);
        contenedor.appendChild(btn);

    })
};