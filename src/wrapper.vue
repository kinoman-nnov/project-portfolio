<template lang="pug">
.x-wrapper
  .wrapper
    mainpage(
      :modalIsActive="modalIsShown",
      :menuLinks="menuLinks",
      :socials="socials",
      :dataAttr="dataAttr",
      @handleChange="handleChange"
    )
  popup-menu(
    v-if="modalIsShown",
    :menuLinks="menuLinks",
    :socials="socials"
    @scrollFromPopup="scrollFromPopup"
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
      dataAttr: "",
      menuLinks: [
        { name: "About me", data: "about" },
        { name: "Skills", data: "skills" },
        { name: "Works", data: "works" },
        { name: "Reviews", data: "reviews" },
      ],
      socials: ["tg", "vk", "github", "envelope"]
    };
  },
  methods: {
    handleChange(state) {
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
    scrollFromPopup(data) {
      const flag = this.dataAttr;

      if (data.attr === flag) {
        const repeatAttr = flag + "Retry"; // модифицировал data.attr, чтобы watcher отслеживал
        this.handleChange(data.state); //  изменения при повторном скролле к той же секции
        this.dataAttr = repeatAttr;
        
      } else {
        this.handleChange(data.state);
        this.dataAttr = data.attr;
      }
    }
  }
};
</script>