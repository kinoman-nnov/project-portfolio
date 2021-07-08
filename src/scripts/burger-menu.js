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

import popupTemplate from '../templates/hamburger-menu.pug';

const body = document.querySelector("body");
const button = document.querySelector(".hamburger");
const menu = document.querySelector(".header-container");
const bg = document.querySelector(".welcome-section")

function toggleMenu() {
  body.classList.toggle('open-modal');
  button.classList.toggle('is-active');
  menu.classList.toggle('popup-menu--open');
  bg.classList.toggle('welcome-section--modal');
  menu.innerHTML = popupTemplate;
}
button.addEventListener("click", toggleMenu);

menu.addEventListener("click", (e) => {
  const target = e.target;
  const dataValue = target.dataset.scrollTo;
  
  if (e.target.classList.contains("hamburger--vortex")) {
    toggleMenu()
  } else if (target.classList.contains("overlay-menu__link")) {
    scrollToSection(dataValue);
    toggleMenu()
  }
});

const scrollToSection = (attr) => {
  const elem = document.querySelector(`[data-section-id=${attr}]`);
  window.scroll({
    left: 0,
    top: elem.offsetTop,
    behavior: "smooth"
  })
};