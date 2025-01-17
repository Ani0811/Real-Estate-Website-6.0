// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


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
document.addEventListener('DOMContentLoaded', function() {
  // buttons
 const submit = document.getElementById("submit");
 submit.addEventListener("click", function(e) {
   e.preventDefault();

 // inputs
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 


signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("User signed up successfully!");
    console.log("User signed up successfully!", user);
    window.location.href="index.html";
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    // ..
  });
  
})

});

// Handle reset password link click
const resetPasswordLink = document.getElementById("resetPasswordLink");
if (resetPasswordLink) {
  resetPasswordLink.addEventListener("click", function(e) {
    e.preventDefault();

    const email = prompt("Please enter your email address:");
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => {
          console.error("Error sending password reset email:", error);
          alert("Error sending password reset email: " + error.message);
        });
    }
  });
} else {
  console.error("Could not find link with ID 'resetPasswordLink'");
}


// Check authentication state and show/hide logout button
onAuthStateChanged(auth, (user) => {
  const logoutButton = document.getElementById("logoutButton");
  const loginButton = document.getElementById("loginButton");
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    if (logoutButton) {
      logoutButton.style.display = "block";
    }
    if (loginButton) {
      loginButton.style.display = "none";
    }
  } else {
    // User is signed out
    console.log("User is signed out");
    if (logoutButton) {
      logoutButton.style.display = "none";
    }
    if (loginButton) {
      loginButton.style.display = "block";
    }
  }
});

// Handle logout functionality
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", function() {
    signOut(auth).then(() => {
      alert("User logged out successfully!");
      window.location.href = "index.html";
    }).catch((error) => {
      console.error("Error logging out:", error);
      alert("Error logging out: " + error.message);
    });
  });
} else {
  console.error("Could not find button with ID 'logoutButton'");
}

;