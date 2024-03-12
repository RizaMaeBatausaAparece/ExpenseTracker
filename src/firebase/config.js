import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASx5e_o8qrsKp2l5sR6bE5gNy8YK2XnWw",
  authDomain: "expensetracker-32fbb.firebaseapp.com",
  projectId: "expensetracker-32fbb",
  storageBucket: "expensetracker-32fbb.appspot.com",
  messagingSenderId: "254603280707",
  appId: "1:254603280707:web:bc7aa395a97563a0d16ff6",
  measurementId: "G-3FQLEJHVD8"

};




initializeApp(firebaseConfig);

const db = getFirestore();
export default db