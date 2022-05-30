<template lang="pug">
  svg(:class="className" :viewBox="icon.viewBox" preserveAspectRatio="none")
    use(:xlink:href="useHref")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    icon() {
      return require(`../../images/icons/${this.name}.svg`).default;
    },
    useHref() {
      return `sprite.svg#${this.icon.id.replace('-usage', '')}`;
    }
  },
};
</script>

<style lang="postcss" scoped>
</style>