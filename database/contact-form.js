import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn_Hk4PhNqD_XUR0dETqemD9fLWM-_X6Q",
    authDomain: "login-form-3e59c.firebaseapp.com",
    projectId: "login-form-3e59c",
    storageBucket: "login-form-3e59c.firebasestorage.app",
    messagingSenderId: "936197205796",
    appId: "1:936197205796:web:01bbab5b71900993474db1"
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