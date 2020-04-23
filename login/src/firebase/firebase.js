import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig ={
    apiKey: "AIzaSyBUIbUJjOL9TCJCpMpUOcqT59C8qlHXmsk",
  authDomain: "fir-login-cde0c.firebaseapp.com",
  databaseURL: "https://fir-login-cde0c.firebaseio.com",
  projectId: "fir-login-cde0c",
  storageBucket: "fir-login-cde0c.appspot.com",
  messagingSenderId: "852182476606",
  appId: "1:852182476606:web:23fa096f0eff9077ee6e6f",
  measurementId: "G-BSHDFKPJ7Z"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db =baseDb;