// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBepc2O9qrD4s-UpUuBa7dMU4IFsytkPOM",
  authDomain: "contact-app-ccaeb.firebaseapp.com",
  databaseURL: "https://contact-app-ccaeb-default-rtdb.firebaseio.com",
  projectId: "contact-app-ccaeb",
  storageBucket: "contact-app-ccaeb.appspot.com",
  messagingSenderId: "169689104624",
  appId: "1:169689104624:web:a0271d9886a84d713cc235"
};


const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)