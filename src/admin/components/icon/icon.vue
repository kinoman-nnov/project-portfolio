<template>
  <button
    v-if="typeAttr !== 'file'"
    :class="[
      'icon-component',
      iconClass,
      { changeSize: this.changeSize },
      { grayscale: this.grayscale },
      { 'no-words': !!title === false },
    ]"
    :data-text="title"
    type="button"
    v-on="$listeners"
  ></button>

  <label
    v-else-if="typeAttr === 'file'"
    :class="['icon-component', iconClass, { changeSize: this.changeSize }]"
  >
    <input class="icon-btn-file-input" type="file" v-on="$listeners" />
  </label>
</template>

<script>
export default {
  props: {
    symbol: {
      type: String,
      default: "pencil",
      validator: (value) =>
        ["pencil", "cross", "tick", "trash", "user", "key"].includes(value),
    },
    typeAttr: String,
    changeSize: {
      type: Boolean,
    },
    grayscale: {
      type: Boolean,
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return `is-${this.symbol}`;
    },
  },
};
</script>

<style lang="postcss" scoped src="./icon.pcss"></style>
