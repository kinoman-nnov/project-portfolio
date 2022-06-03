<template lang="pug">
nav.menu
  ul.menu__list.menu__list--vertical
    li(
      v-for="item in menuLinks", :key="item.id"
    ).menu__item.menu__item--vertical
      a.menu__link(href="#" @click="$emit('scroll-to', item.data)") {{ item.name }}
</template>

<script>
export default {
  props: {
    menuLinks: Array,
  },
};
</script>

<style lang="postcss" scoped>
</style>