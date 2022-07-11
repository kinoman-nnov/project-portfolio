<template lang="pug">
  .works-slider__buttons
    button(
      type="button"
      @click="$emit('slide', 'next')" 
      ).works-slider__btn.works-slider__btn_next
    button(
      type="button"
      @click="$emit('slide', 'prev')" 
      ).works-slider__btn.works-slider__btn_prev
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped src="./slider-btns.pcss">
</style>