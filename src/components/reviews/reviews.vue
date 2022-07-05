<template lang="pug">
.reviews
  .reviews__header
    .reviews__title.section-title What they say about me
    .reviews__buttons
      button.reviews__btn.reviews__btn_prev(
        type="button",
        @click="slide('prev')"
      )
      button.reviews__btn.reviews__btn_next(
        type="button",
        @click="slide('next')"
      )
  swiper(ref="slider", :options="sliderOptions")
    swiper-slide(v-for="review in reviews", :key="review.id")
      .quote
        .quote__text
          p {{ review.text }}
        .quote__user
          .user-min
            .user-min__avatar
              .user-min__pic-wrapper
                img.user-min__avatar-pic(:src="review.photo")
            .user-min__info
              .user-min__name {{ review.author }}
              .user-min__occ {{ review.occ }}
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
import config from "../../../env.paths.json";

axios.defaults.baseURL = config.BASE_URL;

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        breakpoints: {
          // // when window width is >= 320px
          // 320: {
          //   slidesPerView: 2,
          //   spaceBetween: 20
          // },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          }
        }
      },
    };
  },
  methods: {
    pathToImages(reviewsArr) {
      return reviewsArr.map((item) => {
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
      switch (direction) {
        case "next":
          slider.slideNext();
          break;
        case "prev":
          slider.slidePrev();
          break;
      }
    }
  },
  async created() {
    // запросить данные, не обращаясь к реальным дом-узлам
    let { data } = await axios.get("/reviews/1");
    data = this.pathToImages(data);

    this.reviews = data;

    // const data = require("../data/reviews.json");
    // this.reviews = this.requireImagesToArray(data);
  }
};
</script>

<style lang="postcss" scoped>
</style>