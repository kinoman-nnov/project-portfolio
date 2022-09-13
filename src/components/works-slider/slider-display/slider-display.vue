<template lang="pug">
  .works-slider__pics(:data-slide="currentIndex + 1")
    .works-slider__pics-content
      img(:src="currentWork.photo" :key="currentWork.id").works-slider__fullpic
      thumbs-comp(
        :works="reversedWorks"
        :currentWork="currentWork"
        @handleClick="$emit('handleClick', $event)" 
      )
      btns-comp(
        @slide="$emit('slide', $event)" 
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
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.slice(0, 3).reverse();
    }
  }
}
</script>

<style lang="postcss" scoped src="./slider-display.pcss">
</style>