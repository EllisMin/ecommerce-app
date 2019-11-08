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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // when user isn't logged in
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // Create user data in db if snapshot doesn't exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  //   console.log(firestore.doc("users/1123123"));
  //   console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
