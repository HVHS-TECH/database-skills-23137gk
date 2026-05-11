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
