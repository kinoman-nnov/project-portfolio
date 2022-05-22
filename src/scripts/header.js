import Vue from "vue";

new Vue({
  el: "#header-component",
  template: "#mainpage-header",
  data() {
    return {
      modalIsShown: false,
    }
  },
  methods: {
    changedClass() {
      const className = "modal-open"; // запретить скролл на body, когда модалка открыта
      document.body.classList.toggle(className);
    },
    handleChange() {
      this.modalIsShown = !this.modalIsShown;
      this.changedClass();
    }
  }
});