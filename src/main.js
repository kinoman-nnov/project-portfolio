import Vue from 'vue';
import mainpageApp from './mainpageApp.vue';
import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

// import "./scripts/header";
// import "./scripts/skills";
// import "./scripts/works";
// import "./scripts/reviews";
// import "./scripts/popup-menu";

new Vue({
  el: "#mainpageApp",
  render: h => h(mainpageApp)
});