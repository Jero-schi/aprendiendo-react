import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0d8x6mn-5pxHUhInu9MH5adTZp4NDnnE",
    authDomain: "historieta-6edf4.firebaseapp.com",
    projectId: "historieta-6edf4",
    storageBucket: "historieta-6edf4.appspot.com",
    messagingSenderId: "821994685057",
    appId: "1:821994685057:web:74a1fac6c8aae48e904380"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;