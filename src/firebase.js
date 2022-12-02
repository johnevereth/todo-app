// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR_IdcAkjEDjTJ2yR57XmAyU1-8KsHX6k",
  authDomain: "todo-app-e1238.firebaseapp.com",
  projectId: "todo-app-e1238",
  storageBucket: "todo-app-e1238.appspot.com",
  messagingSenderId: "877614800431",
  appId: "1:877614800431:web:3d0cea4486ff94148430da",
  measurementId: "G-JRVB033G7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
