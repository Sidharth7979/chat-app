import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, deleteUser, updatePassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js'
        
// main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// Add Firebase products that you want to use
import {
  getAuth,
  signInAnonymously,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  doc,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCx3iMH2Nw6pt2IGmiSpIEfiBmgCV1bxT4",
  authDomain: "log-in-my-chat.firebaseapp.com",
  projectId: "log-in-my-chat",
  storageBucket: "log-in-my-chat.appspot.com",
  messagingSenderId: "63207382247",
  appId: "1:63207382247:web:46f6236c4e2d8f03c11642",
  measurementId: "G-VWSVT60S2P",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const joinButton = document.getElementById("joinButton");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatsView = document.getElementById("chatsView");
const usernameInput = document.getElementById("usernameInput");
const msglist=document.getElementById('messageList');

let messages = [];
let specifiedUsername = "";
let userLoggedIn = false;
await loadHistoricalMessages();
await subscribeToNewMessages();
 writeMessagesArray();

 if (sendButton){
 sendButton.addEventListener("click", async () => {
  const message = messageInput.value;
  messageInput.value = "";
  const docRef = await addDoc(collection(db, "messages"), {
    user: specifiedUsername,
    message: message,
    created: new Date(),
  });
  console.log(docRef);
});}

function subscribeToNewMessages() {
  const q = query(collection(db, "messages"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const newMessages = [];

    querySnapshot.forEach((doc) => {
      newMessages.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    //  Creating hash map of the existing message
    let existingMessageHash = {};
    for (let message of messages) {
      existingMessageHash[message.id] = true;
    }

    //  Push only those messages which do not
    // exist in the hashMap

    for (let message of newMessages) {
      if (!existingMessageHash[message.id]) {
        messages.push(message);
      }
    }
    writeMessagesArray();
  });
}
async function loadHistoricalMessages() {
  messages = [];
  const querySnapshot = await getDocs(collection(db, "messages"));

  querySnapshot.forEach((doc) => {
    messages.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log(messages);
  return messages;
}



function writeMessagesArray() {
const html = [];
for (let message of messages) {
html.push(messageTemplate(message.message, message.user,
message.created));
}
if (sendButton){
document.getElementById("messageList").innerHTML = html.join("");
}}
function messageTemplate(message, username, timestamp) {
    return `<li>
    <div class="flex space-x-2 pl-2 pt-2">
    <div class= "flex flex-col">
    <div class= "flex items-baseline space-x-2">
    <div class="text-sm font-bold">${username}</div>
  
  </div>
  
<div class="text-sm text-grey-500">${message}</div>
</div>
</div>
`;
}


//  for  the timestamp
{/* <div class="text-sm text-gray-400">${
  new Date(timestamp.seconds * 1000).toLocaleDateString()+ " " + new Date(timestamp.seconds * 1000).toLocaleTimeString()}</div>
  //  */}
  


// log in

 export async function login() {
const usr_email = document.getElementById('user_email');
const usr_passwd = document.getElementById('user_passwd');

    await signInWithEmailAndPassword(auth, usr_email.value, usr_passwd.value)
    .then((userCredential) => {
    const user = userCredential.user;
    Swal.fire({
    icon: 'success',title: 'Login Successfully',text: user.email
    })
    location.href = "main.html";
    })
    .catch((error) => {
    const errorCode = error.code;
    Swal.fire({
    icon: 'error',title: 'Oops...',text: errorCode
    })
    });
    }


    //   register   a new user


const usr_email = document.getElementById("user_email");
const usr_passwd = document.getElementById("user_passwd");

export async function signUpfunc() {
  await createUserWithEmailAndPassword(auth, usr_email.value, usr_passwd.value)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      Swal.fire({
        icon: "success",
        title: "Created Successfully",
        text: user.email,
      });
      location.href = "login.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      Swal.fire({ icon: "error", title: "Oops...", text: errorCode });
    });
}


// log out id

 export async function logoutfunc(){
await signOut(auth).then(() => {
  Swal.fire({
  icon: 'success',
  title: 'Logout Successfully'
  })
  location.href="login.html"; 
  history.pushState(null,null,'login.html');
  location.reload();
  }).catch((error) => {
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: error
  })
  });
  }


  // forgot password

  export async function resetpassword(){

const reset= document.getElementById("user_email"); 
{
      await sendPasswordResetEmail(auth, usr_email.value)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'password reset Email Sent Successsfully',
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
}}
