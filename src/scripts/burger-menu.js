import Vue from "vue";

new Vue({
  el: "#hamburger-component",
  template: "#hamburger-container",
  data: {
    changed: false
  },
  methods: {
    changedClass() {
      this.changed = !this.changed;
      // this.$refs.body = !this.changed
      console.log('click', this.$refs.body)
    }
  }
});