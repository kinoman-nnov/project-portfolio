import Vue from 'vue';
import App from './App.vue';
import SimpleVueValidation from 'simple-vue-validator';
import router from './router.js';
import { store } from "./store";

Vue.use(SimpleVueValidation);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
