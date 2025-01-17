import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";


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
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference contact info collections
let contactInfo=ref(database, "infos");


// Listen for a submit
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      // Handle form submission logic here
      const name = document.querySelector(".name").value;
      const email = document.querySelector(".email").value;
      const subject = document.querySelector(".subject").value;
      const message = document.querySelector(".message").value;

      console.log("Form submitted with values:", { name, email, subject, message });
      alert("Form submitted successfully!");

      // Example of storing data in localStorage (you can replace this with your actual storage logic)
      localStorage.setItem("contactFormData", JSON.stringify({ name, email, subject, message }));
      saveContactInfo(name,email,subject,message);
    });
  } else {
    console.error("Could not find form with ID 'contactForm'");
  }
});

// Save infos to Firebase
function saveContactInfo(name,email,subject,message){
  const newContactInfo = push(contactInfo);

  set(newContactInfo, {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(() => {
    console.log("Data saved successfully");
    alert("Data saved successfully");
    // Optionally, reset the form or give user feedback
  })
  .catch((error) => {
    console.error("Error saving data:", error);
  });
}