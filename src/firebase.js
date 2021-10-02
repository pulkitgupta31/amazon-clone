// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUtoJiRgObDho5iLvs842gHEB5UyGWdtc",
    authDomain: "clone-e4c7d.firebaseapp.com",
    projectId: "clone-e4c7d",
    storageBucket: "clone-e4c7d.appspot.com",
    messagingSenderId: "989184247523",
    appId: "1:989184247523:web:41c3048feb8a9275cd67d6",
    measurementId: "G-84VN4Z6NZQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};