import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOJMDam-0ZnsoPAPAdKwe5_zUtg2SkTVg",
  authDomain: "ecommerce-db-11b3c.firebaseapp.com",
  databaseURL: "https://ecommerce-db-11b3c.firebaseio.com",
  projectId: "ecommerce-db-11b3c",
  storageBucket: "ecommerce-db-11b3c.appspot.com",
  messagingSenderId: "883707968354",
  appId: "1:883707968354:web:d4ab6c8b8434c1ed084a3b",
  measurementId: "G-PMDJVDKR3Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;