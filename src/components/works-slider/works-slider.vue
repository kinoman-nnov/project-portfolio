<template lang="pug">
  .works-slider
    slider-display(
      v-if="works.length"
      :currentWork="currentWork",
      :works="works",
      :currentIndex="currentIndex",
      @slide="slide"
    )
    slider-info(
      v-if="works.length"
      :currentWork="currentWork"
    )
</template>

<script>
import axios from "axios";
import config from "../../../env.paths.json";
import display from "./slider-display";
import info from "./slider-info";

axios.defaults.baseURL = config.BASE_URL;

export default {
  components: {
    sliderDisplay: display,
    sliderInfo: info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      handleClickInd: 0
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
    slide(direction) { // сюда также приходит handleClick из thumbs
      switch (direction) {
        case "next":
          this.nextSlide();
          break;
        case "prev":
          this.prevSlide();
          break;
      }
    },
    nextSlide() {
      this.works.push(this.works[0]);
      this.works.shift();
      this.currentIndex++;
    },
    prevSlide() {
      const lastItem = this.works[this.works.length - 1]; // последний элемент в слайдере
      this.works.unshift(lastItem);
      this.works.pop();
      this.currentIndex--;
    }
  },
  async created() { // запросить данные, не обращаясь к реальным дом-узлам
    let { data } = await axios.get("/works/1");
    data = this.pathToImages(data);

    this.works = data;

    // const data = require("../data/works.json");
    // this.works = this.requireImagesToArray(data);
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";

.works-slider {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @include tablets {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>