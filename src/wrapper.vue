<template lang="pug">
.x-wrapper
  .wrapper
    mainpage(
      :menuLinks="menuLinks",
      :socials="socials",
      @handleChange="handleChange"
    )
  popup-menu(
    v-if="modalIsShown",
    :menuLinks="menuLinks",
    :socials="socials",
    @scroll-to="scrollTosection"
  )
</template>

<script>
import mainpage from "./mainpage.vue";
import popup from "./components/popup-menu";

export default {
  components: {
    mainpage,
    popupMenu: popup,
  },
  data() {
    return {
      modalIsShown: false,
      menuLinks: [
        { name: "About me", data: "about" },
        { name: "Skills", data: "skills" },
        { name: "Works", data: "works" },
        { name: "Reviews", data: "reviews" },
      ],
      socials: ["insta", "vk", "github", "envelope"],
    };
  },
  methods: {
    handleChange(state) {
      const className = "modal-open"; // запретить скролл на body, когда модалка открыта

      switch(state) {
        case 'show':          
          this.modalIsShown = true;
          document.body.classList.add(className);
          break;
        case 'hide':          
          this.modalIsShown = false;
          document.body.classList.remove(className);
          break;
      }
    },
  },
};
</script>

<style lang="postcss">
</style>