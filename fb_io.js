/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/

 function fb_readHighScores() {
    console.log("Reading High Scores");
    firebase.database().ref('/highScores/game1').orderByValue().once('value', idk, fb_readError);
 }

function fb_displayHighScores(snapshot) {
  snapshot.forEach(fb_showOneScore)
}


function fb_showOneScore(child) {
  console.log(child.val());
}



// LOGIN CODE

var GLOBAL_user; // Google's user object


// set up a listener for the login state of the user.
function fb_login() {
  firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
}


// run when the login state of the user changes
function fb_handleLogin() {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; //save the user details object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin
  }
}


// run the google login popup
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user; // save the user details object to a global variable
    console.log("User has logged in")
  });
}