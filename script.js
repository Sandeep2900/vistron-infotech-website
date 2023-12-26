const mobile_nav = document.querySelector(".navbar-btn");
const nav_header = document.querySelector(".distance");

const toggleNavbar = () => {
  
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

