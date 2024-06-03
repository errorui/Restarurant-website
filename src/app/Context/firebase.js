// Import the functions you need from the SDKs you need
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVmnUd3G7MlaR8-aXglGF7g8QsuBJ9iU",
  authDomain: "restaurant--project.firebaseapp.com",
  projectId: "restaurant--project",
  storageBucket: "restaurant--project.appspot.com",
  messagingSenderId: "1091733317148",
  appId: "1:1091733317148:web:2716d32f26314c167a61d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
