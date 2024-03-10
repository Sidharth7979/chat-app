function selectEmoji(emoji){
    console.log(emoji);
   }
  
    // Function to toggle emoji container visibility
    function toggleEmojiContainer() {
        const emojiContainer = document.getElementById('emojiContainer');
        emojiContainer.style.display = emojiContainer.style.display === 'block' ? 'none' : 'block';
    }
  
    // Function to select an emoji and add it to the text box
    function selectEmoji(emoji) {
        console.log("hello")
        // const messageInput = document.getElementById('messageInput');
        messageInput.value += emoji;
    }
  
    // Event listener for emoji button click
    document.getElementById('emojiButton').addEventListener('click', toggleEmojiContainer);

    
// profile options
const profileshow = document.getElementById("profilesid");
function showinfo(){

    profileshow.style.display = profileshow.style.display === 'block' ? 'none' : 'block';
};
//Quick links

const links = document.getElementById("quicklinks");
function showlinks(){
    links.style.display = links.style.display === 'block' ? 'none' : 'block';
};

function oneatatime(){
    if(profileshow.style.display == 'block'){
        links.style.display = 'none';
    }
    else if(links.style.display =='block'){
        profileshow.style.display = 'none';
    }
}
oneatatime();

const notification = document.getElementById("not");
function shownotif(){
    notification.style.display = notification.style.display === 'block'?'none':'block';
}

// for pop up
    
const changepassword =document.getElementById("changepassword");
function changepassshow(){
    changepassword.style.display=changepassword.style.display=== 'block'?'none':'block';
}


// onclick add profile

   
const showpic =document.getElementById("profileContainer");
function showprofile(){
    showpic.style.display=showpic.style.display=== 'block'?'none':'block';
}