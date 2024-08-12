// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-MbQUfG1MCgDKh6OjWBGHoTAgbqGOL30",
  authDomain: "inventory-management-fc0c8.firebaseapp.com",
  projectId: "inventory-management-fc0c8",
  storageBucket: "inventory-management-fc0c8.appspot.com",
  messagingSenderId: "268503005191",
  appId: "1:268503005191:web:b2f230585a798670e952a2",
  measurementId: "G-TNN086TT78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }