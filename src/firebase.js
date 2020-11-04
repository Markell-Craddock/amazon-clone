import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzRrpNPtjYHQxMQopZ6oo0UvZpRLJuAFE",
  authDomain: "clone-4af98.firebaseapp.com",
  databaseURL: "https://clone-4af98.firebaseio.com",
  projectId: "clone-4af98",
  storageBucket: "clone-4af98.appspot.com",
  messagingSenderId: "393981821079",
  appId: "1:393981821079:web:04bf5d10b8788dd6be69d2",
  measurementId: "G-2C1M2YLF4W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
