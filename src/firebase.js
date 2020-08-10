import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVUgs7OS4EBtfCqlG6zIH_372JtHdtO1A",
  authDomain: "messenger-chat-app-d73d4.firebaseapp.com",
  databaseURL: "https://messenger-chat-app-d73d4.firebaseio.com",
  projectId: "messenger-chat-app-d73d4",
  storageBucket: "messenger-chat-app-d73d4.appspot.com",
  messagingSenderId: "356675256233",
  appId: "1:356675256233:web:5e8b344327ed80dfb40eb8",
  measurementId: "G-ZHX3BPJ5C0",
});

const db = firebaseApp.firestore();

export default db;
