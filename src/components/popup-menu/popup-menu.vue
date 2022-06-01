<template lang="pug">
  .popup__container
    .popup__menu-sidebar
      .popup__menu
        menu-comp(
          :menuLinks="menuLinks"
        )
        //- nav.menu
        //-   ul.menu__list.menu__list--popup
        //-     - var menuModalLinks = [{name:"Main", data:"main"}, {name:"About me", data:"about"}, {name:"Skills", data:"skills"}, {name:"Works", data:"works"}, {name:"Reviews", data:"reviews"}];
        //-     each item in menuModalLinks
        //-       li.menu__item.menu__item--popup
        //-         a(href="#").menu__link.menu__link--modal&attributes({'data-scroll-to':`${item.data}`}) #{item.name}
      .popup__buttons
        socials-comp(
          :socials="socials"
        ).popup__socials
        //- ul.socials.popup__socials
        //-   - var socials = ['insta', 'vk', 'github', 'envelope'];
        //-   each item in socials
        //-     li.socials__item
        //-       a(href=`${item === 'envelope' ? 'mailto:myMale@yandex.ru' : '#'}`, target="_blank").socials__link
        //-         +icon(item, 'socials__icon')
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