import Vue from "vue";
import axios from "axios";
import config from "../../env.paths.json";

axios.defaults.baseURL = config.BASE_URL;

// компоненты vue
const thumbs = {
  props: ["works", "currentWork"],
  template: "#slider-thumbs",
};

const btns = {
  template: "#slider-btns"
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
      return this.currentWork.techs.split(",");
    }
  }
};

new Vue({
  el: "#works-component",
  template: "#slider-container",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[0];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForNdx(value);
    }
  },
  methods: {
    makeInfiniteLoopForNdx(index) {
      const lastNumber = this.works.length - 1; // номер последней работы
      const delta = index - lastNumber;
      if (index < 0) this.currentIndex = lastNumber; // сбросить индекс к максимальному в массиве
      if (delta > 0) this.currentIndex = delta - 1; // сбросить индекс к Дельте в массиве
    },
    // requireImagesToArray(data) { // запросить картинки для вебпак из json, при работе с сервером указать абсолютный путь
    //   return data.map(item => {
    //     const requireImages = require(`../images/content/${item.photo}`).default;  // поле default генерирует вебпэк
    //     item.photo = requireImages;
    //     return item;
    //   });
    // }, 
    pathToImages(worksArr) {
      return worksArr.map(item => {
        const path = `${config.BASE_URL}/${item.photo}`;
        item.photo = path;
        return item;
      });
    },
    slide(direction) {
      const lastItem = this.works[this.works.length - 1]; // последний элемент в слайдере
      switch (direction) {
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
    },
    handleClick(slideId) { // клик по slider-thumbs
      let slice = [];

      for (let i = 0; i < this.works.length; i++) {
        if (this.works[i].id === slideId) {
          slice = this.works.splice(0,i); // вырезать часть массива
          this.currentIndex += i;
          break;
        }
      }
      this.works.push(...slice) // вставить в конец массива
    }
  },
  async created() { // запросить данные, не обращаясь к реальным дом-узлам
    let { data } = await axios.get("/works/1");
    data = this.pathToImages(data);

    this.works = data;

    // const data = require("../data/works.json");
    // this.works = this.requireImagesToArray(data);
  }
});