import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDnhB0FdNQQPRxi1BaDNLlIZbz3KVM9WV0",
  authDomain: "twitter-clone-b8d61.firebaseapp.com",
  projectId: "twitter-clone-b8d61",
  storageBucket: "twitter-clone-b8d61.appspot.com",
  messagingSenderId: "948056528340",
  appId: "1:948056528340:web:eb04311b00c2eb3c867241",
  measurementId: "G-5RGTEFD8TC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const db=getFirestore(app); 