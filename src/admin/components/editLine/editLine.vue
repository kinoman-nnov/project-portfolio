<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="currentCategory.editmode === false">
      <div class="text">{{ value }}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="currentCategory.editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <app-input
          placeholder="Название новой группы"
          :value="value"
          v-model="currentCategory.categoryTitle"
          :errorText="errorText"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="$emit('remove')"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    errorText: {
      type: String,
      default: "",
    },
    editModeByDefault: Boolean,
    blocked: Boolean,
  },
  data() {
    return {
      title: this.value, 
      currentCategory: {
        editmode: this.editModeByDefault,
        categoryTitle: this.value
      }
    };
  },
  methods: {
    onApprove() {
      if (this.value.trim() === "") return false;
      if (this.title.trim() === this.value.trim()) {
        this.currentCategory.editmode = false;
      } else {
        this.$emit("approve", this.currentCategory);
        // this.editmode = false;
      }
    },
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input"),
  },
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>