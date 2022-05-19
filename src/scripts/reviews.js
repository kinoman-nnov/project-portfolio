import Vue from "vue";
import { Swiper, SwiperSlide, } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import axios from "axios";
import config from "../../env.paths.json";

axios.defaults.baseURL = config.BASE_URL;

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
    pathToImages(reviewsArr) {
      return reviewsArr.map(item => {
        const path = `${config.BASE_URL}/${item.photo}`;
        item.photo = path;
        return item;
      });
    },
    // requireImagesToArray(data) {
    //   return data.map(item => {
    //     const requireImages = require(`../images/content/${item.pic}`).default;
    //     item.pic = requireImages;
    //     return item;
    //   });
    // },
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
  async created() { // запросить данные, не обращаясь к реальным дом-узлам
    let { data } = await axios.get("/reviews/1");
    data = this.pathToImages(data);
    
    this.reviews = data;

    // const data = require("../data/reviews.json");
    // this.reviews = this.requireImagesToArray(data);
  }
});