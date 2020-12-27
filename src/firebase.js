import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBJ0rasCk0L557mfCRy8svCs2qTEQIUmQY",
    authDomain: "todoist-f34a4.firebaseapp.com",
    projectId: "todoist-f34a4",
    storageBucket: "todoist-f34a4.appspot.com",
    messagingSenderId: "987635799605",
    appId: "1:987635799605:web:20007c6b822084bacf037c"
})

export {firebaseConfig as firebase}