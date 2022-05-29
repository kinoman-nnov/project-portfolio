import { addParameters } from "@storybook/vue";
import "./main.pcss";
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "grey", value: "#8395a7" },
  ],
  darkMode: {
    current: "dark",
  },
});
