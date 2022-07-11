<template lang="pug">
  ul.works-slider__thumbs
    li.works-slider__thumb-item(
      v-for="slide in works" :key="slide.id"
      :class="{active: currentWork.id === slide.id}"
    )
      button(
        @click="$emit('handleClick', slide.id)" 
      ).works-slider__thumb-link
        img(:src="slide.photo").works-slider__thumb
</template>

<script>
export default {
  props: ["works", "currentWork"],
}
</script>

<style lang="postcss" scoped src="./slider-thumbs.pcss">
</style>