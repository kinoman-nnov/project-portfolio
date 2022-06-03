<template lang="pug">
  button(
    :class="{ 'is-active': modalIsShown }"
    @click="handleChange"
  ).header__hamburger-btn.hamburger.hamburger--vortex
    span.hamburger-box
      span.hamburger-inner
</template>

<script>
export default {
  data() {
    return {
      modalIsShown: false
    }
  },
  methods: {
    handleChange() {
      this.modalIsShown = !this.modalIsShown;
      const toggleModal = (this.modalIsShown === true) ? "show" : "hide";
      this.$emit('handleChange', toggleModal);
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>