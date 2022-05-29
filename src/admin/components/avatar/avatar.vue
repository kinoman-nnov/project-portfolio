<template>
  <div :class="['avatar-component', { bordered: active }]" :style="measures">
    <div class="image">
      <img v-bind="$attrs" alt="user picture" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "3",
    },
    active: Boolean,
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}rem`,
        height: `${size}rem`,
      };
    },
  },
};
</script>
<style lang="postcss" scoped src="./avatar.pcss"></style>