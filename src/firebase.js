import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8glPUE6CCqBitkjP4ho6uAjes3MS6oXk",
  authDomain: "linkedin-clone-71f47.firebaseapp.com",
  projectId: "linkedin-clone-71f47",
  storageBucket: "linkedin-clone-71f47.appspot.com",
  messagingSenderId: "193836177515",
  appId: "1:193836177515:web:fd9aa5b78f62e93dc1792e",
  measurementId: "G-4BEQPVMEWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}