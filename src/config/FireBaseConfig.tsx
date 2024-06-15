// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiwZ2Ijr-sIMFyexEV-gP2Nu0X0m6qHN4",
  authDomain: "classquizbysirbasitinclass.firebaseapp.com",
  databaseURL: "https://classquizbysirbasitinclass-default-rtdb.firebaseio.com",
  projectId: "classquizbysirbasitinclass",
  storageBucket: "classquizbysirbasitinclass.appspot.com",
  messagingSenderId: "501037830116",
  appId: "1:501037830116:web:d0e5eb80a2e884325a41f1",
  measurementId: "G-S7CRV1KJP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;