let currentUser = '';
let fullProfile = '';

firebase.auth().onAuthStateChanged(user => {
    currentUser = firebase.auth().currentUser
    firebase.database().ref(`users/${currentUser.uid}`)
        .once('value')
        .then((user) => {
            fullProfile = user.val()
            $('.displayName').html(`${fullProfile.displayName}`)
            $('.imagen').html(`<img class="" width="30" src="${fullProfile.photoUrl}">`)

        })
        .catch((error) => {
            console.log("Database error > " + JSON.stringify(error));
        });

});