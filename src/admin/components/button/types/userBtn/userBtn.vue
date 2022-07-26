<template>
  <label class="btn-file-container" v-if="typeAttr === 'file'">
    <div class="btn-file-fake user-btn-component" >
      <icon symbol="user" changeableSize :typeAttr="typeAttr" v-on="$listeners" />
    </div>  
  </label>
</template>

<script>
import icon from "../../../icon";

export default {
  components: { icon },
  props: {
    typeAttr: {
      type: String,
      default: "button",
      validator: (value) => ["button", "file"].includes(value),
    },
  },
}
</script>

<style lang="postcss" scoped>
.user-btn-component {
  width: 100%;
  height: 100%;
}
</style>