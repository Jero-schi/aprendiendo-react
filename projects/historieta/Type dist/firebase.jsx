import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCye-7_jzcedZlkOVkz5D9m1IGXYfWNyO8",
    authDomain: "backend-comic.firebaseapp.com",
    projectId: "backend-comic",
    storageBucket: "backend-comic.appspot.com",
    messagingSenderId: "358891442675",
    appId: "1:358891442675:web:2f6796982a7162388b0286"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
