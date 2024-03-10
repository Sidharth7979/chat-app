
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
const usr_email=document.getElementById("user_email")

// forgot password
const reset= document.getElementById("Reset");
reset.addEventListener("click",()=> {
     sendPasswordResetEmail(auth, usr_email.value)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '25000 Bitcons are  Sent Successfully to Harneet and Vikas bank account',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "login.html";
                }
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorCode
            })
        });
})