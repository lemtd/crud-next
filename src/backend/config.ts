// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

firebase.initializeApp(firebaseConfig)

export default firebase;

// export const firebaseConfig = {
//     apiKey: "AIzaSyCl1QuKgnCyX3fnwDMCNKhzZada79IMVVI",
//     authDomain: "tela-crud.firebaseapp.com",
//     projectId: "tela-crud",
//     storageBucket: "tela-crud.appspot.com",
//     messagingSenderId: "31760820009",
//     appId: "1:31760820009:web:ff9dde1cb15ef878e9b938"
// }

// const firebase = initializeApp(firebaseConfig);

// export default firebase;