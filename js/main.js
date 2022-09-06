// Toggler
const navToggler = document.querySelector(".nav__toggler");
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", (e) => {
  nav.classList.toggle("nav__expanded");
});

// Navbar
var mainHeader = document.querySelector(".main-header");

window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mainHeader.classList.add("scroll");
  } else {
    mainHeader.classList.remove("scroll");
  }
};