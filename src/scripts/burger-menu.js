// import Vue from "vue";

// new Vue({
//   el: "#hamburger-component",
//   template: "#hamburger-container",
//   data: {
//     changed: false
//   },
//   methods: {
//     changedClass() {
//       this.changed = !this.changed;
//       // this.$refs.body = !this.changed
//     }
//   }
// });

const body = document.querySelector("body");
const button = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");
const menu = document.querySelector(".header__modal");
const footerMenu = document.querySelector(".footer__data-menu");
const modalMenu = document.querySelector(".header__menu-modal");
const modalButtons = document.querySelector(".header__buttons-modal");
const content = document.querySelector(".hero__content");
const headerButtons = document.querySelector(".header__buttons");
const bg = document.querySelector(".welcome-section");

function toggleMenu() {
  body.classList.toggle('open-modal');
  button.classList.toggle('is-active');
  menu.classList.toggle('popup-menu--open');
  modalMenu.classList.toggle('header__menu-modal--open');
  modalButtons.classList.toggle('header__buttons-modal--open');
  content.classList.toggle('hero__content--close');
  headerButtons.classList.toggle('header__buttons--close');
  bg.classList.toggle('welcome-section--bg-change');
}

button.addEventListener("click", toggleMenu);

function pageNavigation(e) {
  
  const target = e.target;
  const dataValue = target.dataset.scrollTo;

  if (target.classList.contains("hamburger--vortex")) {
    toggleMenu();
  } else if ((target.classList.contains("menu__link")) && (document.querySelector('.popup-menu--open'))) {
    scrollToSection(dataValue);
    toggleMenu();
  } else if (target.classList.contains("menu__link")) {
    scrollToSection(dataValue);
  }
}

headerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  pageNavigation(e);
});

menu.addEventListener("click", (e) => {
  e.preventDefault();
  pageNavigation(e);
});

footerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  pageNavigation(e);
});

const scrollToSection = (attr) => {
  const elem = document.querySelector(`[data-section-id=${attr}]`);
  window.scroll({
    left: 0,
    top: elem.offsetTop,
    behavior: "smooth"
  });
};