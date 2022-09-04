// Toggler
const navToggler = document.querySelector(".nav__toggler");
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", (e) => {
  nav.classList.toggle("nav__expanded");
});