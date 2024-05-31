let navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navEl.classList.add("nav-scrolled");
  } else {
    navEl.classList.remove("nav-scrolled");
  }
});
let navlink = document.querySelector(".nav-link");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navlink.classList.add("nav-scrolled");
  } else {
    navlink.classList.remove("nav-scrolled");
  }
});
