//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: firekey,
    authDomain: "project-1-a8c3a.firebaseapp.com",
    databaseURL: "https://project-1-a8c3a.firebaseio.com",
    projectId: "project-1-a8c3a",
    storageBucket: "project-1-a8c3a.appspot.com",

};
firebase.initializeApp(firebaseConfig);

$('#save-changes').on('click', create_account);

function create_account(e) {
    if (e) {
        e.preventDefault();
    }

    var storeEmail = $('.store-email').val().trim();
    var storePass = $('.store-pass').val().trim();
    
    firebase.auth().createUserWithEmailAndPassword(storeEmail, storePass).catch(function(error) {
        window.alert('Error: ' + error.message);
    });
    $('#exampleModal').modal('hide');
    return false;


}


$('#login-btn').on('click', login)

function login(e) {
    if (e) {
        e.preventDefault();
    }

    var userEmail = $('.login-email').val().trim();
    var userPass = $('.login-pass').val().trim();

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then(function() {
            window.location = 'index.html'
        }, function(error) {
            window.alert('Error: ' + error.message);
        });
}

$('#sign-out').on('click', function() {
    firebase.auth().signOut().then(function() {
        window.location = 'contribute.html';
    }, function(error) {
        window.alert('Error: ' + error.message);
    });
})