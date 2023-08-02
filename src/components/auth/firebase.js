// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdGl_DeFzHJ98XKHQfEBfXOwno1w-AbtM",
  authDomain: "book-attic-30f69.firebaseapp.com",
  projectId: "book-attic-30f69",
  storageBucket: "book-attic-30f69.appspot.com",
  messagingSenderId: "567735264007",
  appId: "1:567735264007:web:574f3f08d3d61234ca1ba2",
  measurementId: "G-4X64DMHEDM"
};

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);