import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTOOrymhhfmUZWVDPv3-z-B_QctAypP1A",
  authDomain: "tapissier-a7e06.firebaseapp.com",
  projectId: "tapissier-a7e06",
  storageBucket: "tapissier-a7e06.appspot.com",
  messagingSenderId: "24522686835",
  appId: "1:24522686835:web:05886c539cc00be3e50506",
  measurementId: "G-TZDZN3745M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db,storage };