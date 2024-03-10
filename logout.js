
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, deleteUser, updatePassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCx3iMH2Nw6pt2IGmiSpIEfiBmgCV1bxT4",
    authDomain: "log-in-my-chat.firebaseapp.com",
    projectId: "log-in-my-chat",
    storageBucket: "log-in-my-chat.appspot.com",
    messagingSenderId: "63207382247",
    appId: "1:63207382247:web:46f6236c4e2d8f03c11642",
    measurementId: "G-VWSVT60S2P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const logout=document.getElementById("logout");
logout.addEventListener("click",()=>{
  signOut(auth).then(() => {
  Swal.fire({
  icon: 'success',
  title: 'Logout Successfully'
  })
  location.href="login.html"
  }).catch((error) => {
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: error
  })
  });
  })