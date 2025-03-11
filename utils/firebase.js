// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5DB9KR80_mQ18G9VkCLy3BwJUrm5S6w",
  authDomain: "restaurants-57aa0.firebaseapp.com",
  projectId: "restaurants-57aa0",
  storageBucket: "restaurants-57aa0.firebasestorage.app",
  messagingSenderId: "850597541337",
  appId: "1:850597541337:web:96962f71f19d70443c55c8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
