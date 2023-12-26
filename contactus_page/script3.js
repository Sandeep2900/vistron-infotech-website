const mobile_nav = document.querySelector(".navbar-btn");
const nav_distance = document.querySelector(".distance");

const toggleNavbar = () => {
  
  nav_distance.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());