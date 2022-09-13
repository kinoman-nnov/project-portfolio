<template lang="pug">
  nav.menu
    ul.menu__list 
      li(v-for="item in menuLinks" :key="item.id").menu__item
        a(href="#" @click.prevent="$emit('scroll-to', item.data)").menu__link {{ item.name }}
</template>

<script>
export default {
  props: {
    menuLinks: Array
  }
}
</script>

<style lang="postcss" scoped src="../../menu.pcss"></style>