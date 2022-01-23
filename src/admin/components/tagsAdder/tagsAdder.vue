<template>
  <div class="tags-adder-component">
    <app-input 
      title="Добавление тега" 
      v-model="currentTags"
      @input="$emit('change', currentTags)"
    />
    <ul class="tags">
      <li class="tag"
        v-for="(tag, index) in tagsArray" :key="`${tag}${index}`"
        
      >
        <tag
          interactive 
          :title="tag"
          @click="removeTag(tag)"
        /> 
      </li>
    </ul>
  </div>
</template>

<script>
import appInput from "../input";
import tag from "../tag";

export default {
  components: {
    appInput,
    tag,
  },
  props: {
    tags: {
      type: String, 
      default: ""
    }
  },
  model: {
    prop: "tags",
    event: "change"
  },
  data() {
    return {
      currentTags: this.tags
    }
  },
  computed: {
    tagsArray() {
      let tagsArr =  this.currentTags.trim().split(','); 
      tagsArr = tagsArr.map(tag => tag.trim());
      tagsArr = tagsArr.filter(tag => tag !== '');
      return tagsArr; // возвращает массив тегов без пробелов
    }
  },
  methods: {
    removeTag(tag) {
      const tags = [...this.tagsArray];
      const tagNdx = tags.indexOf(tag);

      if (tagNdx < 0) return;

      tags.splice(tagNdx, 1);
      this.currentTags = tags.join(", ");

      this.$emit("change", this.currentTags);
    }
  }
};
</script>

<style lang="postcss" scoped>
  .tags {
    display: flex;
    margin-top: 20px;
  }

  .tag {
    margin-right: 10px;
  }
</style>