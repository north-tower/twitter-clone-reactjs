import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjMpe5pYdPznKF0W_ocmoOAL3OHO_Auw4",
    authDomain: "twitter-clone-north.firebaseapp.com",
    projectId: "twitter-clone-north",
    storageBucket: "twitter-clone-north.appspot.com",
    messagingSenderId: "535058412489",
    appId: "1:535058412489:web:a6bec4177ca6af9f00ae18",
    measurementId: "G-NV8WV3GLGZ"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };