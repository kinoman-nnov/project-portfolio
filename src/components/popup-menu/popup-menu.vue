<template lang="pug">
.popup__container
  .popup__menu-sidebar
    .popup__menu
      menu-comp(
        type="vertical",
        :menuLinks="menuLinksSupplemented",
        @scroll-to="scrollFromPopup"
      )
    .popup__buttons
      socials-comp.popup__socials(:socials="socials")
</template>

<script>
// import { eventBus } from "../../main.js";
import menu from "../menu";
import socials from "../socials";

export default {
  components: {
    menuComp: menu,
    socialsComp: socials,
  },
  props: {
    menuLinks: Array,
    socials: Array,
  },
  data() {
    return {
      menuLinkToAdd: [{ name: "Main", data: "main" }],
    };
  },
  computed: {
    menuLinksSupplemented() {
      const newArrMenuLinks = this.menuLinkToAdd;
      newArrMenuLinks.push(...this.menuLinks);
      return newArrMenuLinks;
    },
  },
  methods: {
    scrollFromPopup(attr) {
      this.$emit('scrollFromPopup', {attr, state: 'hide'});
      // eventBus.$emit("scrollFromPopup", { attr, state: "hide" });
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>