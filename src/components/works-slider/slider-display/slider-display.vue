<template lang="pug">
  .works-slider__pics(:data-slide="currentIndex + 1")
    .works-slider__pics-content
      img(:src="currentWork.photo" :key="currentWork.id").works-slider__fullpic
      thumbs-comp(
        :works="reversedWorks"
        :currentWork="currentWork"
        :slideDirection="slideDirection"
        @handleClick="handleClick" 
      )
      btns-comp(
        @slide="slide" 
      )
</template>

<script>
import thumbs from "../slider-thumbs";
import btns from "../slider-btns";

export default {
  components: {
    thumbsComp: thumbs,
    btnsComp: btns,
  },
  props: ["currentWork", "works", "currentIndex"],
  data() {
    return {
      slideDirection: ''
    }
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.slice(0, 3).reverse();
    }
  },
  methods: {
    slide(event) {
      this.slideDirection = event;
      this.$emit('slide', event)
    },
    handleClick() {
      this.slideDirection = "handleClick";
      this.$emit('handleClick');
    }
  }
}
</script>

<style lang="postcss" scoped src="./slider-display.pcss">
</style>