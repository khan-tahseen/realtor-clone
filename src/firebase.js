import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtF34iDFvft9eAjxrpVsRFLyp4ItpZ0BA",
  authDomain: "realtor-clone-bbc31.firebaseapp.com",
  projectId: "realtor-clone-bbc31",
  storageBucket: "realtor-clone-bbc31.appspot.com",
  messagingSenderId: "568279538353",
  appId: "1:568279538353:web:7ac39b92a1461530dc2090",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
