<template lang="pug">
.works-slider__animation-thumbs
  .works-slider__thumbs-wrapper
    transition-group(
      tag="ul"
      :css="false"
      v-if="showMobileThumbs"
      
      @before-enter="beforeEnterCb"
      @enter="enterCb"
      @after-enter="afterEnterCb"
      @leave="leaveCb"
    ).works-slider__thumbs
      li.works-slider__thumb-item(
        v-for="(slide, index) in works" :key="slide.id"
        :class="{ active: currentWork.id === slide.id }"
      )
        button(
          :disabled="disabled"
          @click="handleClick(index)"
        ).works-slider__thumb-link
          img(:src="slide.photo").works-slider__thumb
  .works-slider__thumbs-btns
    btns-comp(
      :disabled="disabled"
      @slide="slide" 
    )
</template>

<script>
import btns from "../slider-btns";

export default {
  components: {
    btnsComp: btns
  },
  props: ["works", "currentWork"],
  data() {
    return {
      slideDirection: "",
      animationsCount: 0,
      disabled: false,
      showMobileThumbs: false
    }
  },
  methods: {
    slide(event) {
      this.slideDirection = event;
      this.$emit('slide', event);
    },
    handleClick(ndx) {
      const slidesLength = this.works.length;
      const index = Math.abs(ndx - slidesLength); // перевернул индексы в массиве
      
      this.slideDirection = "next";
      this.animationsCount = index;
      if (this.animationsCount > 1) this.$emit('slide', "next");
      this.animationsCount -= 1;
    },
    beforeEnterCb() {
      this.disabled = true;
    },
    enterCb(el, done) {
      const list = el.closest("ul");
      const offsetList = list.offsetHeight / 3; // сдвинуть список на высоту слайда

      switch(this.slideDirection) {
        case "next":
          el.classList.add('outsided-top');
          list.classList.add('transition');
          list.style.transform = `translateY(${offsetList}px)`;
          break;

        case "prev":
          el.classList.add('outsided-bottom');
          list.classList.add('transition');
          list.style.transform = `translateY(${-offsetList}px)`;
          break;
      }

      list.addEventListener("transitionend", e => done());
    },
    afterEnterCb(el, done) {
      const list = el.closest("ul");

      list.classList.remove('transition');
      list.style.transform = "translateY(0px)";

      switch(this.slideDirection) {
        case "next":
          el.classList.remove('outsided-top');
          break;

        case "prev":
          el.classList.remove('outsided-bottom');
          break;
      }
      list.addEventListener("transitionend", e => {
        if (this.animationsCount > 1) {
          // this.$emit('slide', "next");
          this.animationsCount -= 1;
        }
      });
      this.disabled = false;
    },
    leaveCb(el, done) {
            
      el.classList.add('fade');
      el.addEventListener("transitionend", e => done());
    }
  },
  created() {
    // const mediaQuery = window.matchMedia("(min-width:480px)", );
    window.addEventListener("resize", () => {
      if (window.innerWidth > 480) {
        this.showMobileThumbs = true;
      } else {
        this.showMobileThumbs = false;
      }
    }); // скрыть слайдер в мобильной версии
  }
}
</script>

<style lang="postcss" scoped src="./slider-thumbs.pcss">
</style>