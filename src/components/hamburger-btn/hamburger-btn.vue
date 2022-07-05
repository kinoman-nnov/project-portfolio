<template lang="pug">
  button(
    :class="{ 'is-active': modalIsActive }"
    @click="handleChange"
  ).hamburger.hamburger--vortex
    span.hamburger-box
      span.hamburger-inner
</template>

<script>
export default {
  props: {
    modalIsActive: Boolean // по умолчанию false
  },
  methods: {
    handleChange() {
      let showModal = this.modalIsActive;
      showModal = !showModal;
      const toggleModal = (showModal === true) ? "show" : "hide";
      this.$emit('handleChange', toggleModal);
    }
  }
}
</script>

<style lang="postcss" scoped src="./hamburger.pcss">
</style>