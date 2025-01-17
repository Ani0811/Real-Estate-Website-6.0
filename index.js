// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBfvslvEf05guHvooDN_Y1XKjGrJQyJVIs",
    authDomain: "login-contac-form.firebaseapp.com",
    projectId: "login-contac-form",
    storageBucket: "login-contac-form.firebasestorage.app",
    messagingSenderId: "617271546176",
    appId: "1:617271546176:web:9779f18a24451ac56caaa5"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// const domainName = window.location.hostname;
// console.log("Domain Name:", domainName);



// buttons
const submit = document.getElementById("submit");
submit.addEventListener("click", function(e) {
e.preventDefault();

// inputs
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("User signed up successfully!");
    console.log("User signed up successfully!", user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
      console.error("Error signing up:", errorCode, errorMessage);
    // ..
  });


})



// Google Sign-In button
const googleLoginButton = document.getElementById("google-id");
googleLoginButton.addEventListener("click", function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      alert("User signed in successfully!");
      console.log("User signed in successfully!", user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
      console.error("Error signing in:", errorCode, errorMessage);
    });
});

// Handle redirect results
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      // The signed-in user info.
      const user = result.user;
      alert("User signed in successfully with redirect!");
      console.log("User signed in successfully with redirect!", user);
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
    console.error("Error signing in with redirect:", errorCode, errorMessage);
  });