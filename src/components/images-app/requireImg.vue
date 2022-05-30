<template lang="pug">
  img(:src="image" :class="className")
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: ""
    }
  },
  computed: {
    image() {
      return require(`../../images/${this.path}`).default;
    }
  }
}
</script> 

<style lang="postcss" scoped>
</style>