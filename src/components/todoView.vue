<template lang="pug">
div
  h1 Task view component {{ $route.params.todo }}
  button(@click="goBack").button_back
    svg(viewBox="0 0 50.773 50.773", xmlns="http://www.w3.org/2000/svg")
      path(
        d="M50.773,14.748c0-0.552-0.448-1-1-1s-1,0.448-1,1v11H12.807v-8.39c0-0.391-0.228-0.747-0.584-0.909c-0.354-0.163-0.773-0.104-1.07,0.152L0.346,25.935C0.126,26.125,0,26.401,0,26.692s0.126,0.567,0.346,0.757l10.807,9.333c0.186,0.16,0.418,0.243,0.654,0.243c0.141,0,0.283-0.03,0.416-0.091c0.356-0.163,0.584-0.518,0.584-0.909v-8.277h37.966V14.748zM2.53,26.692l8.277-7.148v7.038c-0.01,0.056-0.034,0.108-0.034,0.167s0.024,0.111,0.034,0.167v6.925L2.53,26.692z"
      )
    div.button_text Back
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: transparent;
  border-radius: 10%;
  cursor: pointer;
}

.button_back {
  width: 85px;
}

.button_text {
  margin-left: 10px;
}
</style>