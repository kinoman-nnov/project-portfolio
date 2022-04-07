<template>
  <label class="btn-file-container" v-if="typeAttr === 'file'">
    <div
      :class="[
        'btn-file-fake',
        'btn-decorator',
        { plain }
      ]">
        <icon symbol="user" changeSize />
    </div>
    <input class="btn-file-input" type="file" v-on="$listeners" />
  </label>
</template>

<script>
import icon from "../../../icon";

export default {
  components: { icon },
  props: {
    plain: Boolean,
    typeAttr: {
      type: String,
      default: "user",
      validator: (value) => ["user", "file"].includes(value),
    },
  },
}
</script>

<style lang="postcss" scoped src="./userBtn.pcss"></style>