import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfvslvEf05guHvooDN_Y1XKjGrJQyJVIs",
    authDomain: "login-contac-form.firebaseapp.com",
    projectId: "login-contac-form",
    storageBucket: "login-contac-form.firebasestorage.app",
    messagingSenderId: "617271546176",
    appId: "1:617271546176:web:9779f18a24451ac56caaa5"
  };
  

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// listen for a submit
document.querySelector('.contact-form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name=document.querySelector('.name').value;
    let email=document.querySelector('.email').value;
    let subject=document.querySelector('.subject').value;
    let message=document.querySelector('.message').value;
    console.log(name,email,subject,message);
    
    
}