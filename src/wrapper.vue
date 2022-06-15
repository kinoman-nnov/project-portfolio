<template lang="pug">
.x-wrapper
  .wrapper
    mainpage(
      :modalIsActive="modalIsShown"
      :menuLinks="menuLinks",
      :socials="socials",
      @handleChange="handleChange"
    )
  popup-menu(
    v-if="modalIsShown",
    :menuLinks="menuLinks",
    :socials="socials"
    @handleChange="handleChange"
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
    handleChange(state) { console.log("handlechange-from wrapper");
      const className = "modal-open"; // запретить скролл на body, когда модалка открыта

      switch(state) {
        case 'show':
          document.body.classList.add(className);
          this.modalIsShown = true;
          break;
        case 'hide':
          document.body.classList.remove(className);
          this.modalIsShown = false;
          break;
      }
    },
  }
};
</script>

<style lang="postcss">
</style>