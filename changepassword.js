
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, deleteUser, updatePassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'

// // document.addEventListener("DOMContentLoaded"{
// //    validation of new password and confirm password

// function validatePassword() {
//     var newPassword = document.getElementById("OLDPASS");
//     var confirmPassword = document.getElementById("NEWPASS");

//     if (newPassword.value != confirmPassword.value) {
//       alert("Passwords do not match.");
//       event.preventDefault();
//     }

//     return true;
//   }


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCx3iMH2Nw6pt2IGmiSpIEfiBmgCV1bxT4",
//     authDomain: "log-in-my-chat.firebaseapp.com",
//     projectId: "log-in-my-chat",
//     storageBucket: "log-in-my-chat.appspot.com",
//     messagingSenderId: "63207382247",
//     appId: "1:63207382247:web:46f6236c4e2d8f03c11642",
//     measurementId: "G-VWSVT60S2P"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const usr_passwd = document.getElementById('NEWPASS');

// submitpass.addEventListener("click",()=>{
//     const user = auth.currentUser;
//     updatePassword(user, usr_passwd.value).then(() => {
//         Swal.fire({
//             icon: 'success',
//             title: 'Password Changed Successfully'
//         })
//     }).catch((error) => {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: error
//         })
//     });
// })

// // for show password in change in password

//  var mybtn = document.getElementById('mybtn');
// mybtn.addEventListener("click",()=>{
//     // alert ("hello")
//     var pswd = document.getElementById('OLDPASS');

//     if(pswd.type==="password")
//     {pswd.type="text";}

//     else if(pswd.type==="text")
//     {pswd.type="password";}})



// // for close button in change in password
// cancelpass.addEventListener("click",()=>{
//     document.getElementById("OLDPASS").value="";
//     document.getElementById("NEWPASS").value="";
//     changepassword.style.display="none";
    

// })

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, deleteUser, updatePassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';

document.addEventListener("DOMContentLoaded", () => {
    const submitpass = document.getElementById('submitpass');
    const cancelpass = document.getElementById('cancelpass');
    const changepassword = document.getElementById('changepassword');

    function validatePassword() {
        var newPassword = document.getElementById("OLDPASS");
        var confirmPassword = document.getElementById("NEWPASS");

        if (newPassword.value !== confirmPassword.value) {
            alert("Passwords do not match.");
            event.preventDefault();
            return false;
        }

        return true;
    }

    const firebaseConfig = {
        apiKey: "AIzaSyCx3iMH2Nw6pt2IGmiSpIEfiBmgCV1bxT4",
        authDomain: "log-in-my-chat.firebaseapp.com",
        projectId: "log-in-my-chat",
        storageBucket: "log-in-my-chat.appspot.com",
        messagingSenderId: "63207382247",
        appId: "1:63207382247:web:46f6236c4e2d8f03c11642",
        measurementId: "G-VWSVT60S2P"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const usr_passwd = document.getElementById('NEWPASS');

    submitpass.addEventListener("click", (event) => {
        event.preventDefault();
        if (validatePassword()) {
            const user = auth.currentUser;
            updatePassword(user, usr_passwd.value).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Changed Successfully'
                });
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                });
            });
        }
    });

    var mybtn = document.getElementById('mybtn');
    mybtn.addEventListener("click", () => {
        var pswd = document.getElementById('OLDPASS');

        if (pswd.type === "password") {
            pswd.type = "text";
        } else if (pswd.type === "text") {
            pswd.type = "password";
        }
    });

    cancelpass.addEventListener("click", () => {
        document.getElementById("OLDPASS").value = "";
        document.getElementById("NEWPASS").value = "";
        changepassword.style.display = "none";
    });
});
