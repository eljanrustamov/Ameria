// #region ~E~
// #region NAV SCROLL
const header = document.querySelector("header");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.onscroll = function () {
  scrollFunction();
};
// #endregion

// nav open - close
const nav = document.querySelector("nav");
const navLogo = document.querySelector(".logo a");
const btnOpen = document.querySelector(".open-btn");
const btnClose = document.querySelector(".close-btn");

btnOpen.addEventListener("click", function () {
  nav.classList.toggle("hidden");

  navLogo.style.color = "var(--color-primary-dark)";
  btnClose.style.display = "block";
  btnOpen.style.display = "none";
});

btnClose.addEventListener("click", function () {
  nav.classList.toggle("hidden");

  if (!header.classList.contains("scrolled")){
    navLogo.style.color = "var(--color-white)";
  }
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
});

//#endregion
