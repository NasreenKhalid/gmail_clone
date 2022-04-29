import * as firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase";
import { GoogleAuthProvider } from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBqNx2TZ3-mqofzQtCz6idADO42REgx32A",
    authDomain: "react-todo-app-8bbff.firebaseapp.com",
    databaseURL: "https://react-todo-app-8bbff.firebaseio.com",
    projectId: "react-todo-app-8bbff",
    storageBucket: "react-todo-app-8bbff.appspot.com",
    messagingSenderId: "455805225192",
    appId: "1:455805225192:web:26aabc0d706abddf00e15d",
    measurementId: "G-SZ67E9FZJB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


export const auth = firebase.auth();
 

  export default db;