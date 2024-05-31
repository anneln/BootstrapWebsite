let navEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navEl.classList.add("nav-scrolled");
  } else {
    navEl.classList.remove("nav-scrolled");
  }
});
