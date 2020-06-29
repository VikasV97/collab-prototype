import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDLWEOt3jsiwFWBJ-Hrek8Lgm9sWaZSvVw",
    authDomain: "collab-11355.firebaseapp.com",
    databaseURL: "https://collab-11355.firebaseio.com",
    projectId: "collab-11355",
    storageBucket: "collab-11355.appspot.com",
    messagingSenderId: "197684472367",
    appId: "1:197684472367:web:3aa8abc382847b38b0f4da",
    measurementId: "G-KXETQLHDV6"
  };
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

export default db;



