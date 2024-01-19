// loader
const loader = document.querySelector(".loader-wrapper");

window.onload = function () {
  loader.classList.add("loader-hidden");
  setInterval(function () {
    loader.classList.add("loader-hidden");
  },990);
};

// dark mode
const mode = document.querySelector(".mode");
const body = document.querySelector("body");

mode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

// burger
const burgerBtn = document.querySelector(".burger-btn");
const headerList = document.querySelector(".header__list");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("active");
  headerList.classList.toggle("header__list--mobile");
});
