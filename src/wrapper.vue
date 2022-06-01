<template lang="pug">
  .x-wrapper
    .wrapper
      mainpage(
        :menuLinks="menuLinks"
        :socials="socials"
      )
    popup-menu(
      v-if="modalIsShown"
      :menuLinks="menuLinks"
      :socials="socials"
    )
</template>

<script>
import mainpage from "./mainpage.vue";
import popup from "./components/popup-menu";

export default {
  components: {
    mainpage,
    popupMenu: popup
  },
  data() {
    return {
      modalIsShown: false,
      menuLinks: [
        {name:"About me", data:"about"},
        {name:"Skills", data:"skills"},
        {name:"Works", data:"works"},
        {name:"Reviews", data:"reviews"}
      ],
      socials: ['insta', 'vk', 'github', 'envelope']
    }
  }
}
</script>

<style lang="postcss">

</style>