import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config ={
  apiKey: "AIzaSyCQEdTBfaTMnAu1jS_Tefzw72_HmJWZgV0",
  authDomain: "fire-chatvue.firebaseapp.com",
  databaseURL: "https://fire-chatvue-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fire-chatvue",
  storageBucket: "fire-chatvue.appspot.com",
  messagingSenderId: "311120950122",
  appId: "1:311120950122:web:6f36a9cfa82f3f845f2b13"
}

const db = firebase.initializeApp(config);
export default db;
