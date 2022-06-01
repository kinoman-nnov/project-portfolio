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

new Vue({
  el: "#wrapper-component",
  render: h => h(wrapper)
});