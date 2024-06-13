import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC9OoSwdxG3JkmOClVD2sXx0shh_sacs4w",
  authDomain: "ibrahim-elkhansa-resume.firebaseapp.com",
  projectId: "ibrahim-elkhansa-resume",
  storageBucket: "ibrahim-elkhansa-resume.appspot.com",
  messagingSenderId: "512317883102",
  appId: "1:512317883102:web:69b8995da906cbf079f84f",
  measurementId: "G-TZYLR6QZVC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };