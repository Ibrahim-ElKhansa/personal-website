import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9OoSwdxG3JkmOClVD2sXx0shh_sacs4w",
  authDomain: "ibrahim-elkhansa-resume.firebaseapp.com",
  projectId: "ibrahim-elkhansa-resume",
  storageBucket: "ibrahim-elkhansa-resume.appspot.com",
  messagingSenderId: "512317883102",
  appId: "1:512317883102:web:6c241b98788953f179f84f",
  measurementId: "G-GK6D7RLJE6"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);