import "./main.css";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navBarMenu = document.querySelector(".navBar-menu");

  if (hamburgerMenu && navBarMenu) {
    hamburgerMenu.addEventListener("click", function () {
      navBarMenu.classList.toggle("hide");
      navBarMenu.classList.toggle("show");
    });
  }

  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
        obj.classList.add("fade-in"); // Add fade-in class when animation starts
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      obj.innerText = Math.floor(progress * range + start) + " +";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }

  animateValue("clients", 0, 300, 2000);
  animateValue("projects", 0, 900, 2000);
  animateValue("awards", 0, 20, 2000);
});

// Popup functionality
const contactForm = document.getElementById("contactForm");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting

  // Create form data object
  const formData = new FormData(contactForm);

  // Send form data to the server using Fetch
  fetch("submit_form.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        // Set modal content
        document.getElementById("modalName").textContent = data.name;
        document.getElementById("modalEmail").textContent = data.email;
        document.getElementById("modalMessage").textContent = data.message;

        // Show modal
        contactModal.classList.remove("hidden");
      } else {
        alert("Error: " + data.message);
      }
    })
    .catch((error) => {
      alert("There was an error submitting your form. Please try again." + error);
    });
});

// Close modal when 'X' is clicked
closeModal.addEventListener("click", () => {
  contactModal.classList.add("hidden");
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document.querySelector("nav a [href*=" + id + "]").classList.add("active");
      });
    };
  });
};

document.addEventListener('DOMContentLoaded', function() 
{
  const scrollToTopBtn = document.querySelector('#scrollToTop');
  
  if (scrollToTopBtn) 
    {
        scrollToTopBtn.addEventListener('click', function(e) 
        {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      });
    }
});
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const yesIcon = document.getElementById('yesIcon');
const noIcon = document.getElementById('noIcon');

// Define resetFeedback function
function resetFeedback() {
  yesIcon.classList.remove('text-green-500');
  noIcon.classList.remove('text-red-500');
}

// Handle Yes Button Click
yesButton.addEventListener('click', () => {
  // Reset previous styles
  resetFeedback();
  // Change icon color to green
  yesIcon.classList.add('text-green-500');
  // Show Toastify success message
  Toastify({
    text: "Thank you for your feedback!",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "green",
    className: "rounded"
  }).showToast();
});

// Handle No Button Click
noButton.addEventListener('click', () => {
  // Reset previous styles
  resetFeedback();
  // Change icon color to red
  noIcon.classList.add('text-red-500');
  // Show Toastify error message
  Toastify({
    text: "We will definitely improve on our services.",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "red",
    className: "rounded"
  }).showToast();
});