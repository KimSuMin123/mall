import { initializeApp } from "firebase/app"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDfn3QrxaEnfn-qctO7JgEDW7TLIBTjoNc",
    authDomain: "react-shoppingmall-cf960.firebaseapp.com",
    projectId: "react-shoppingmall-cf960",
    storageBucket: "react-shoppingmall-cf960.appspot.com",
    messagingSenderId: "970112321927",
    appId: "1:970112321927:web:4d3c3bada552a5c8872b22"
  };

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app)

export {
    firebaseAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
}
