<template lang="pug">
  .works-slider__buttons
    button(
      type="button"
      :disabled="disabled"
      @click="$emit('slide', 'prev')" 
      ).works-slider__btn.works-slider__btn_next
    button(
      type="button"
      :disabled="disabled"
      @click="$emit('slide', 'next')" 
      ).works-slider__btn.works-slider__btn_prev
</template>

<script>
export default {
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="postcss" scoped src="./slider-btns.pcss">
</style>