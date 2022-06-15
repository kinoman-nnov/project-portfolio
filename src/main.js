import Vue from 'vue';
import wrapper from "./wrapper.vue";
import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

// import "./scripts/skills";
// import "./scripts/works";
// import "./scripts/reviews";
// import "./scripts/popup-menu";

export const eventBus = new Vue(); // export default не раюотает, в компонент приходит undefined

new Vue({
  el: "#wrapper-component",
  render: h => h(wrapper)
});