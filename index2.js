import { initializeApp } from
"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
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
// Your web app's Firebase configuration
const firebaseConfig = {

apiKey: "AIzaSyCtYgDIuilrMbaHf1J8Rz1lraLmIbe45yE",
authDomain: "gapp-app-74319.firebaseapp.com",
projectId: "gapp-app-74319",
storageBucket: "gapp-app-74319.appspot.com",
messagingSenderId: "269646399233",
appId: "1:269646399233:web:a5aa301ad24f9b5ede3d00",
measurementId: "G-R6C0CZXL77"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const joinButton = document.getElementById("joinButton");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatsView = document.getElementById("chatsView");
const usernameInput = document.getElementById("usernameInput");


let messages = [];
let specifiedUsername = "";
let userLoggedIn = false;
joinButton.addEventListener("click", () => {
specifiedUsername = usernameInput.value;
if (!specifiedUsername) {
alert("username cannot be empty");
return;
}

signInAnonymously(auth)
.then(async () => {
joinView.classList.add("hidden");
chatsView.classList.remove("hidden");
userLoggedIn = true;
await loadHistoricalMessages();

await subscribeToNewMessages();
writeMessagesArray();
console.log("User logged-in");
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode, errorMessage);
});
});
sendButton.addEventListener("click", async () => {
const message = messageInput.value;
messageInput.value = "";
const docRef = await addDoc(collection(db, "messages"), {
user: specifiedUsername,
message: message,
created: new Date(),
});
console.log(docRef);
});
function subscribeToNewMessages() {
const q = query(collection(db, "messages"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
const newMessages = [];
})}
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
document.getElementById("messageList").innerHTML = html.join("");
}
function messageTemplate(message, username, timestamp) {
    return `
    <div>${username}</div>
    <div>${new Date(timestamp.seconds * 1000).toLocaleDateString()} ${new Date(timestamp.seconds * 1000).toLocaleTimeString()}</div>
    <div>${message}</div>
`;
}


   

