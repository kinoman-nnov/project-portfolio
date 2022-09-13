<template lang="pug">
  component( 
    :is="type"
    v-bind="$attrs"
    v-on="$listeners"
  )
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  components: {
    default: () => import("./types/defaultMenu"),
    vertical: () => import("./types/verticalMenu")
  }
}
</script>