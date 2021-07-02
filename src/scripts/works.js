import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs"
};

const btns = {
  template: "#slider-btns"
};

const display = {
  props: ["currentWork"],
  template: "#slider-display",
  components: {
    thumbs,
    btns
  }
};

const tags = {
  template: "#slider-tags"
};

const info = {
  template: "#slider-info",
  components: {
    tags
  }
};

new Vue({
  el: "#preview-component",
  template: "#slider-container",
  components: {
    display,
    info
  }, 
  data() { // записываем данные в объект data, чтобы обращаться к ним внутри компонента
    return {
      works: [],
      currentWork: {}
    };
  },
  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requireImages = require(`../images/content/${item.photo}`);
        item.photo = requireImages;
        return item;
      });
    }
  },
  created() { // запросить данные, не обращаясь к реальным дом-узлам
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
    this.currentWork = this.works[0];
  }
});