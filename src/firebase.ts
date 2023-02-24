// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDilQ0x9rnmDtek8CLHiQ9IGVW9GL93IhY",
  authDomain: "grid-collab-785f7.firebaseapp.com",
  databaseURL: "https://grid-collab-785f7-default-rtdb.firebaseio.com",
  projectId: "grid-collab-785f7",
  storageBucket: "grid-collab-785f7.appspot.com",
  messagingSenderId: "379846720192",
  appId: "1:379846720192:web:a4327a2c466a68bcb10b25",
  measurementId: "G-94V3YFSWKZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

/////////////////////////////
