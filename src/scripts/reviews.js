import Vue from "vue";
import { Swiper, SwiperSlide, } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

new Vue({
  el: "#reviews-component",
  template: "#reviews-slider-container",
  components: {
    Swiper,
    SwiperSlide
  },
  data() { // записываем данные в объект data, чтобы обращаться к ним внутри компонента
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 2
      }
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requireImages = require(`../images/content/${item.pic}`).default;
        item.pic = requireImages;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper;
      switch(direction) {
        case "next":
          slider.slideNext();
          break;
        case "prev":
          slider.slidePrev();
          break;
      }
    }
  },
  created() { // запросить данные, не обращаясь к реальным дом-узлам
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  }
});