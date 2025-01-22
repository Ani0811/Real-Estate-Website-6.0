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

// On page load, check login status
document.addEventListener('DOMContentLoaded', function () 
{
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if(isLoggedIn == 'true')
  {
      // Show Logout button and hide Login button
      document.getElementById('logOutButton').classList.remove('hidden');
      document.getElementById('loginButton').classList.add('hidden');
  }
  else
  {
      //Show Login button and hide Logout Button
      document.getElementById('loginButton').classList.remove('hidden');
      document.getElementById('logoutButton').classList.add('hidden');
  }
});

//Logout function
function logout()
{
    localStorage.removeItem('isLoggedIn');

    //Redirect to home page
    window.location.href = 'index.html';
}


document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById("rating-stars");
  let currentRating = 0;

  // Create 5 stars dynamically
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("button");
    star.classList.add("star");
    star.dataset.index = i;
    star.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-gray-400">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;
    starsContainer.appendChild(star);

    // Add click event to each star
    star.addEventListener("click", () => {
      const clickedIndex = parseInt(star.dataset.index, 10);

      if (clickedIndex === currentRating) {
        // Hide message
        updateMessage(""); // Clear the message
      } else {
        // Highlight stars and show message
        highlightStars(clickedIndex);
        currentRating = clickedIndex;
        updateMessage(`${clickedIndex} out of 5`);
      }
    });
  }

  // Highlight stars up to the given index
  function highlightStars(index) {
    for (let i = 0; i < index; i++) {
      const star = starsContainer.children[i];
      const svg = star.querySelector("svg");
      svg.classList.remove("text-gray-400");
      svg.classList.add("text-yellow-500");
    }
  }

  // Update rating message
  function updateMessage(message) {
    let messageElement = document.getElementById("rating-message");
    if (!messageElement) {
      messageElement = document.createElement("span");
      messageElement.id = "rating-message";
      messageElement.classList.add("text-sm", "text-gray-600", "dark:text-gray-300", "mt-2", "block");
      starsContainer.appendChild(messageElement);
    }
    messageElement.textContent = message;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById("rating-stars");
  const ratingsContainer = document.getElementById("ratings-container");

  starsContainer.addEventListener("click", () => {
    if (ratingsContainer) {
      ratingsContainer.classList.add("fade-in");
    }
  });
});

ocument.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById("rating-stars");
  let currentRating = 0;

  // Create 5 stars dynamically
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("button");
    star.classList.add("star");
    star.dataset.index = i;
    star.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-gray-400">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;
    starsContainer.appendChild(star);

    // Add click event to each star
    star.addEventListener("click", () => {
      const clickedIndex = parseInt(star.dataset.index, 10);

      if (clickedIndex === currentRating) {
        // Hide message
        updateMessage(""); // Clear the message
      } else {
        // Highlight stars and show message
        highlightStars(clickedIndex);
        currentRating = clickedIndex;
        updateMessage(`${clickedIndex} out of 5`);
      }
    });
  }

  // Highlight stars up to the given index
  function highlightStars(index) {
    for (let i = 0; i < index; i++) {
      const star = starsContainer.children[i];
      const svg = star.querySelector("svg");
      svg.classList.remove("text-gray-400");
      svg.classList.add("text-yellow-500");
    }
  }

  // Update rating message
  function updateMessage(message) {
    let messageElement = document.getElementById("rating-message");
    if (!messageElement) {
      messageElement = document.createElement("span");
      messageElement.id = "rating-message";
      messageElement.classList.add("text-sm", "text-gray-600", "dark:text-gray-300", "mt-2", "block");
      starsContainer.appendChild(messageElement);
    }
    messageElement.textContent = message;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById("rating-stars");
  const ratingsContainer = document.getElementById("ratings-container");

  starsContainer.addEventListener("click", () => {
    if (ratingsContainer) {
      ratingsContainer.classList.add("fade-in");
    }
  });
});



