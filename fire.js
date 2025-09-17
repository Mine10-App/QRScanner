// ===== Firebase config =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC5G36djlzBuhNEzKzrvcJ_1-qvrTm1bOs",
    authDomain: "qr-scanner-live-5b385.firebaseapp.com",
    projectId: "qr-scanner-live-5b385",
    storageBucket: "qr-scanner-live-5b385.firebasestorage.app",
    messagingSenderId: "260207453177",
    appId: "1:260207453177:web:ea438ade7b1b56270e1328",
    measurementId: "G-WQEEHEPWG3"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
