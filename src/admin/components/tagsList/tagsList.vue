<template>
  <ul class="tags-list-component">
    <li class="item item-tagList" v-for="tag in tagsArray" :key="tag">
      <tag :title="tag" />
    </li>
  </ul>
</template>

<script>
import tag from "../tag";

export default {
  components: {
    tag,
  },
  props: {
    tags: String,
  },
  computed: {
    tagsArray() {
      return this.tags.split(",");
    },
  },
};
</script>

<style lang="postcss" scoped>
ul {
  display: flex;
}

.tags-list-component {
  flex-wrap: wrap;
}

/* li {
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
} */

.item-tagList {
  margin-bottom: 0;
}
</style>
