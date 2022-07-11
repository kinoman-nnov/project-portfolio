<template lang="pug">
  .skills-row
    .skills-row__title {{ category.category }}
    ul.skills-row__list
      li.skills-row__item(v-for="skill in category.skills", :key="skill.id")
        skill-item(:skill="skill")
</template>

<script>
import skillItem from "../skill-item";
export default {
  props: {
    category: Object
  },
  components: {
    skillItem
  }
}
</script>

<style lang="postcss" scoped src="./skills-row.pcss">
</style>