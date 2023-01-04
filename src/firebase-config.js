import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGrKCRQYGTvYXzRTYjYTDW15yoUiB-VmM",
  authDomain: "todo-789aa.firebaseapp.com",
  projectId: "todo-789aa",
  storageBucket: "todo-789aa.appspot.com",
  messagingSenderId: "719245249358",
  appId: "1:719245249358:web:aedaadf81055340432ec1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);