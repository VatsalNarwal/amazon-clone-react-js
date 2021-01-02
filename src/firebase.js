import firebase from "firebase";

const firebaseConfig = {
  // place firebase config here
  // apiKey: "something",
  // authDomain: "somthing",
  // databaseURL: "somthing",
  // projectId: "somthing",
  // storageBucket: "somthing",
  // messagingSenderId: "somthing",
  // appId: "somthing",
  // measurementId: "somthing"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
