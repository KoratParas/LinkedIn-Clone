import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9cBjStJxMEMdNW6IfFvFLWGVrqq69TnY",
  authDomain: "linkedin-clone-8a6b2.firebaseapp.com",
  projectId: "linkedin-clone-8a6b2",
  storageBucket: "linkedin-clone-8a6b2.firebasestorage.app",
  messagingSenderId: "113064440171",
  appId: "1:113064440171:web:0df60875e321a2158e1c2e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
