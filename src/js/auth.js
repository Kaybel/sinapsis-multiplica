// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSE_WBV8P94cXkg9K0DmENNdkuuEvRH2k",
    authDomain: "sinapsis-multiplica.firebaseapp.com",
    databaseURL: "https://sinapsis-multiplica.firebaseio.com",
    projectId: "sinapsis-multiplica",
    storageBucket: "sinapsis-multiplica.appspot.com",
    messagingSenderId: "698338914142"
};
firebase.initializeApp(config);

//Iniciar sesión google
function googleLoginwithFireBase() {

    let provider = new firebase.auth.GoogleAuthProvider();
    

    firebase.auth().signInWithPopup(provider).then(function(result) {

        redirectFromLogin()
    }).catch(function(e) {
        console.log(e)
        console.log(result);
    });
}

//
function redirectFromLogin() {
    location.href = "src/privado.html";
}

function logoutWithFireBase() {
    firebase.auth().signOut()
        .then(() => {
            location.href = "index.html";
            console.log('usuario finalizo su sesion')
        })
        .catch();
}