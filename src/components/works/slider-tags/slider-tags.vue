<template lang="pug">
  ul.works-slider__tags(v-if="tags.length")
    li.works-slider__tag-item(v-for="tag in tags" :key="tag.id")
      .tag {{ tag }}
</template>

<script>
export default {
  props: ["tags"],
}
</script>

<style lang="postcss" scoped>

</style>