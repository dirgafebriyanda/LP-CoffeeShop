// Toggle class active untuk hambutger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function () {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target))
    navbarNav.classList.remove("active");
});
document.addEventListener("click", function () {
  if (!sb.contains(e.target) && !searchForm.contains(e.target))
    searchForm.classList.remove("active");
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
