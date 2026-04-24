/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
  apiKey: "AIzaSyCe4hPfEDRZM-DjwRf7QbIo0hpExQVkzNc",
  authDomain: "gauri-kaushik-12comp.firebaseapp.com",
  databaseURL: "https://gauri-kaushik-12comp-default-rtdb.firebaseio.com",
  projectId: "gauri-kaushik-12comp",
  storageBucket: "gauri-kaushik-12comp.firebasestorage.app",
  messagingSenderId: "873182020840",
  appId: "1:873182020840:web:633a42df5371f52179f55d",
  measurementId: "G-266SFTSZMB"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
