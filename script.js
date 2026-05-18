/**************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )
}



function Goodbye() {
  console.log("Running goodbye")
  firebase.database().ref('/').set(
    {
      message: 'ka kite āno'
    }
  )
}




function simpleRead() {
 console.log("Reading message");
 firebase.database().ref('/').child('message').once('value', display, fb_readError);
 console.log("Leaving simpleRead")
}


function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null
    console.log('There was no record when trying to read the message');
  }
  else {
    console.log('The message is:' + dbData)
  }

  console.log("Running display(), the message is:" + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}





function fb_readError(error) {
  console.log('There was an error an error reading the message');
  console.error(error);
}





// read listener - real time data synchronisation, connection between database and application
function fb_readListener() {
 console.log("Read Listener");
 firebase.database().ref('/message').on('value', display)
}


// writing more complex data
/*
firebase.database().ref('/').set(
  {
    game1: {
      users: {
        Dhruv: 9999,
        Jack: 10000,
        Toby: 9,
        Yug: 98436
      }
    }
  }
);
firebase.database().ref('/game1/users/Jack').set(896329823);

let user = "Toby";
let score = "0"
firebase.database().ref('/game1/users/'+user).set(
  score
);
*/



// more complex scores
highscoreTable = {
  game1: {
    users: {
       Dhruv: 9999,
        Jack: 10000,
        Toby: 9,
        Yug: 5400
    }
  }
}
//firebase.database().ref('/').set(highscoreTable)


function resetScores() {

  firebase.database().ref('/').set({
    game1: {
      users: {
        Dhruv: 9999,
        Jack: 10000,
        Toby: 9,
        Yug: 5400
      }
    }
  })

}


function fb_readHighScores() {
  console.log("Reading high scores");
  firebase.database().ref('/game1/users').orderByValue().once('value', fb_displayHighScores, fb_readError)
  console.log("Read high scores")
}

function fb_displayHighScores(snapshot) {
  let highScores = snapshot.val()
  console.log("Displaying high score")
  console.log(snapshot.val())
 console.log("Dhruv got " + highScores["Dhruv"]+ " points")
 snapshot.forEach(fb_showOneScore)
}


// creating objects
var person = {
  firstname: "Jane",
  lastName: "Gray",
  eyeColor: "gold"
};
person["age"] = 20;






/*
function fb_displayHighScores(snapshot) {
  snapshot.forEach(fb_showOneScore)
}
*/

function fb_showOneScore(child) {
  console.log(child.key+" got "+ child.val()+" points");
}



var GLOBAL_user; // Google's user object

// set up a listener for the login state of the user.
function fb_login() {
  firebase.auth().onAuthStateChanged(LOGIN_CALLBACK);
}


// run when the login state of the user changes
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user; //save the user details object to a global variable
  } else {
    console.log("User is NOT logged in - Starting the popup process")
    fb_popupLogin();
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




