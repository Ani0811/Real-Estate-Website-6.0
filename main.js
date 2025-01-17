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
