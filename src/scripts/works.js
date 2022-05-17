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
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForNdx(value);
    }
  },
  methods: {
    makeInfiniteLoopForNdx(index) {
      const workNumber = this.works.length - 1; // номер последней работы
      if (index < 0) this.currentIndex = workNumber;
      if (index > workNumber) this.currentIndex = 0;
    },
    // requireImagesToArray(data) { // запросить картинки для вебпак, при работе с сервером указать абсолютный путь
    //   return data.map(item => {
    //     const requireImages = require(`../images/content/${item.photo}`).default;  // поле default генерирует вебпэк
    //     item.photo = requireImages;
    //     return item;
    //   });
    // }, 
    coverImage(worksArr) {
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
    handleClick(slideId) { // клик по картинке слайдера
      let newWorks = this.works;
      let slice = [];

      // for (let i = 0; i < newWorks.length; i++) {
      //   if (newWorks[i].id === slideId) {
      //     slice = newWorks.splice(1,i);
          
      //     continue;
      //   }
      // }
      
      
      // const newWorksArr = [];
      // let objToReplace = {};
      // newWorksArr.unshift(objToReplace);
      // this.works = newWorksArr;
      // console.log(objToReplace.id);
      // this.currentIndex = objToReplace.id -1;
    }
  },
  async created() { // запросить данные, не обращаясь к реальным дом-узлам
    let { data } = await axios.get("/works/1");
    data = this.coverImage(data);

    this.works = data;
    // this.works.photo = this.coverImage(this.works.photo)

    // const data = require("../data/works.json");
    // this.works = this.requireImagesToArray(data);
  }
});