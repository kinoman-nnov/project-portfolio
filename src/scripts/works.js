import Vue from "vue";

const thumbs = {
  props: ["works", "currentWork"],
  template: "#slider-thumbs"
};

const btns = {
  template: "#slider-btns",
};

const display = {
  props: ["currentWork", "works", "currentIndex"],
  template: "#slider-display",
  components: {
    thumbs,
    btns
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.slice(0, 3).reverse();
    }
  }
};

const tags = {
  props: ["tags"],
  template: "#slider-tags"
};

const info = {
  props: ["currentWork"],
  template: "#slider-info",
  components: {
    tags
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
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
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[0];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForNdx(value);
    }
  },
  methods: {
    makeInfiniteLoopForNdx(index) {
      const workNumber = this.works.length - 1
      if (index < 0) this.currentIndex = this.works.length - 1;
      if (index > workNumber) this.currentIndex = 0;
    },
    requireImagesToArray(data) {
      return data.map(item => {
        const requireImages = require(`../images/content/${item.photo}`).default;
        item.photo = requireImages;
        return item;
      });
    },
    slide(direction) {
      const lastItem = this.works[this.works.length - 1]; // последний элемент в слайдере
      switch(direction) {
        case "next":
          this.works.push(this.works[0]);
          this.works.shift();
          this.currentIndex++;
          break;
        case "prev":
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--;
          break;
      }
    }
  },
  created() { // запросить данные, не обращаясь к реальным дом-узлам
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
});