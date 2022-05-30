<template lang="pug">
  ul.socials
    //- - var socials = ['insta', 'vk', 'github', 'envelope'];
    //- each item in socials
    li(v-for="item in socials" :key="item.id").socials__item
      a(href=`${item === 'envelope' ? 'mailto:myMale@yandex.ru' : '#'}`, target="_blank").socials__link
        icons-comp(
          :name="item"
          :className="'socials__icon'"
        )
        //- +icon(item, 'socials__icon')
</template>

<script>
import icons from "../icons-app";
export default {
  components: {
    iconsComp: icons
  },
  props: {
    socials: Array
  }
}
</script>

<style lang="postcss" scoped>
</style>