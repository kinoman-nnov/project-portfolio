<template lang="pug">
  .popup__container
    .popup__menu-sidebar
      .popup__menu
        menu-comp(
          type="vertical"
          :menuLinks="menuLinks"
          @scroll-to="$emit('scroll-to', $event)"
        )
      .popup__buttons
        socials-comp(
          :socials="socials"
        ).popup__socials
</template>

<script>
import menu from "../menu";
import socials from "../socials";

export default {
  components: {
    menuComp: menu,
    socialsComp: socials
  },
  props: {
    menuLinks: Array,
    socials: Array
  },
}
</script>

<style lang="postcss" scoped>

</style>