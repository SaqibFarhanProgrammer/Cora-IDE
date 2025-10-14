import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyAU9nGkdu3hDmMOTBHNaxtQUI-6C4dUSxQ",
 authDomain: "cora-ide.firebaseapp.com",
 projectId: "cora-ide",
 storageBucket: "cora-ide.firebasestorage.app",
 messagingSenderId: "885227904806",
 appId: "1:885227904806:web:6157aee5ddf1b6de1fabe7",
 measurementId: "G-SKYWQQNV8D",
 databaseURL: "https://cora-ide-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);