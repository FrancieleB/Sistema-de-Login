import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAA2C3N91PNorYTtojcndeOxv8HDbFOJD4",
    authDomain: "sistema-login-50714.firebaseapp.com",
    projectId: "sistema-login-50714",
    storageBucket: "sistema-login-50714.appspot.com",
    messagingSenderId: "522719327628",
    appId: "1:522719327628:web:20b35d597503a1d0a092a9"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;