// Replace this config with your own from Firebase Console
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcJsiiGF-8ht6Hc4ncBXHubxqLROvWpYs",
  authDomain: "ametco-86834.firebaseapp.com",
  projectId: "ametco-86834",
  storageBucket: "ametco-86834.firebasestorage.app",
  messagingSenderId: "596867579122",
  appId: "1:596867579122:web:6fba1841d216decb46646b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
