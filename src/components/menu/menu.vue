<template lang="pug">
  nav.menu
    ul.menu__list
      //- - var menuLinks = [{name:"About me", data:"about"}, {name:"Skills", data:"skills"}, {name:"Works", data:"works"}, {name:"Reviews", data:"reviews"}];
      //- each item in menuLinks 
      li(v-for="item in menuLinks" :key="item.id").menu__item
        a(href="#" :data-scroll-to="item.data").menu__link {{ item.name }}
</template>

<script>
export default {
  props: {
    menuLinks: Array
  }
}
</script>

<style lang="postcss" scoped>

</style>