<template lang="pug">
  .works-slider__info
    ul.works-slider__tags
      tags-comp(
        :tags="tagsArray"
      )
    .works-slider__title {{ currentWork.title }}
    .works-slider__desc
      p {{ currentWork.description }}
    .works-slider__link 
      a(href="currentWork.link").iconed-link View the website
</template>

<script>
import tags from "../slider-tags";

export default {
  components: {
    tagsComp: tags
  },
  props: ['currentWork'],
  computed: {
    tagsArray() {
      return this.currentWork.techs.split(",");
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>