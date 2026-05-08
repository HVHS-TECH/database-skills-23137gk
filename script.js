/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

//const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )
}



function Goodbye(){
  console.log("Running goodbye)")
  firebase.database().ref('/').set(
    {
      message: 'ka kite āno'
    }
  )
}



function DO_THIS(snapshot) {
 console.log (snapshot.val());
}



function simpleRead() {
 console.log("Reading message");
 firebase.database().ref('/').child('message').once('value', display, fb_readError);
 console.log("Leaving simpleRead")
}




function fb_readError(error) {
  console.log('There was an error an error reading the message');
  console.error(error);
}





function display(snapshot) {

  // null checks 

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





// read listener - real time data synchronisation, connection between database and application
function fb_readListener() {
 console.log("Read Listener");
 firebase.database().ref('/message').on('value', fb_logDatabaseRead)
}


// writing more complex data
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




// more complex scores
highscoreTable = {
  game1: {

    users1: {
       name: "Dhruv",
       score: 9999
    },

    users2: {
      Name: "Jack",
      Score: 10000
    },

    users3: {
      Name: "Nityaa",
      Score: 200
    },

    users4: {
      Name: "Yug",
      Score: 98436
    }

  }
}
firebase.database().ref('/').set(highscoreTable)




function fb_readHighScores() {
  console.log("Reading high scores");
  firebase.database().ref('/game1/users1').once('value', idk, fb_readError)
  console.log("Read high scores")
}

function idk(apple) {
  let highScores = apple.val()
  console.log("Displaying high score")
  console.log(apple.val())
  console.log("Dhruv got " + apple.val()["Dhruv"]+ " points")
 
}


// creating objects
var person = {
  firstname: "Jane",
  lastName: "Gray",
  eyeColor: "gold"
};
person["age"] = 20;


















/*
function displayPath(snapshot) {
  var dbData = snapshot.val();
  console.log("Read the path")
  console.log(dbData);
  console.log(dbData["jack"]);
  let names = Object.keys(dbData)
  console.log(names)
  for(i=0; i<names.length; i++) {
    let key = names[i];
    console.log("Score "+ i +" is for "+ key)
  } 
}*/












/*
var person = {
  name: {
    first: "jane",
    last: "Gray"
  }
  age: 20,
  eyeColor: "gold"
};
*/

/*
var person = {
  age: 20,
  eyeColor: "gold"
};
var nameObject = {
  first: "jane",
  "Gray"
}
person["name"] = nameObject
*/

