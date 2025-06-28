import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA_u0FKCd6MlHANrRmDr2Ec5nA7fEL6UBQ",
  authDomain: "hedara-hashgraph.firebaseapp.com",
  projectId: "hedara-hashgraph",
  appId: "1:836955251346:web:386d093f94bf040782bc4b"
};

  // const firebaseConfig = {
  //   apiKey: "AIzaSyA_u0FKCd6MlHANrRmDr2Ec5nA7fEL6UBQ",
  //   authDomain: "hedara-hashgraph.firebaseapp.com",
  //   projectId: "hedara-hashgraph",
  //   storageBucket: "hedara-hashgraph.firebasestorage.app",
  //   messagingSenderId: "836955251346",
  //   appId: "1:836955251346:web:386d093f94bf040782bc4b",
  //   measurementId: "G-XZXHPEBQ0X"
  // };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);