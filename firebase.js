// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjlpQEO8sa_sgLRAAnTcjn3lUGuUAD4IU",
  authDomain: "rnfirstproject-e081c.firebaseapp.com",
  projectId: "rnfirstproject-e081c",
  storageBucket: "rnfirstproject-e081c.appspot.com",
  messagingSenderId: "686053881810",
  appId: "1:686053881810:web:2f2685a286bd2049b6fa0b",
  measurementId: "G-DK0BV80B56"
};

// Initialize Firebase
let app; 
if (firebase.apps.length === 0) {
    app= firebase.initializeApp(firebaseConfig);
} else {
    app= firebase.app()
}

const auth =firebase.auth()

export {auth};