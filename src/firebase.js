import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNQjJcWbi5Xqc7cPT_FAjjc-aT9MMTJAE",
  authDomain: "react-shopping-cart-7d3d0.firebaseapp.com",
  databaseURL: "https://react-shopping-cart-7d3d0-default-rtdb.firebaseio.com",
  projectId: "react-shopping-cart-7d3d0",
  storageBucket: "react-shopping-cart-7d3d0.appspot.com",
  messagingSenderId: "499021846827",
  appId: "1:499021846827:web:87106af3c206c8d00c0d6e",
  measurementId: "G-HJC8PMMXT3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };