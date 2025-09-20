const firebaseConfig = {
  apiKey: "AIzaSyCMOPJnK_qpUZcHUWi6EQz-qclrNsDky3U",
  authDomain: "psysko-8d035.firebaseapp.com",
  projectId: "psysko-8d035",
  storageBucket: "psysko-8d035.firebasestorage.app",
  messagingSenderId: "176989826632",
  appId: "1:176989826632:web:bae58e639edbd8d4adf27d",
  measurementId: "G-XL5YJR6L74"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const firebaseConnected = true;

// Update Firebase status indicator in UI
document.getElementById('firebase-status-icon').className = 'fas fa-plug connected';
document.getElementById('firebase-status-text').textContent = 'Firebase connected successfully';
document.getElementById('firebase-setup').style.display = 'none';
