// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBfvslvEf05guHvooDN_Y1XKjGrJQyJVIs",
  authDomain: "login-contac-form.firebaseapp.com",
  databaseURL: "https://login-contac-form-default-rtdb.firebaseio.com",
  projectId: "login-contac-form",
  storageBucket: "login-contac-form.appspot.com",
  messagingSenderId: "617271546176",
  appId: "1:617271546176:web:389ff3c646ea1a5c6caaa5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

// const domainName = window.location.hostname;
// console.log("Domain Name:", domainName);

// buttons
const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  e.preventDefault();

  // inputs

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("User has been registered successfully!.Go to the Login Button!!");
      console.log(
        "User has been registered successfully!.Go to the Login Button!!",
        user
      );
      window.location.href = "login.html";
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
      // ..
    });
});
