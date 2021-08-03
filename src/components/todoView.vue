<template lang="pug">
  div
    h1 task view component {{$route.params.todo}}
    button(@click="goBack") Back
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
