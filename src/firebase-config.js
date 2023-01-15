import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtMy1M0AH4JfFVctNApnmrS2Tm59e4Sn4",
  authDomain: "todo2-86ea8.firebaseapp.com",
  projectId: "todo2-86ea8",
  storageBucket: "todo2-86ea8.appspot.com",
  messagingSenderId: "57339452409",
  appId: "1:57339452409:web:16b88b07052b76ea353b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);