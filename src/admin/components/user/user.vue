<template>
  <div class="user-component">
    <avatar size="2.7" :src="userPic" />
    <div
      :class="[
        'user-container',
        { 'user-container--with-btn': !plain }
      ]"
    >
      <div class="username">{{ title }}</div>
      <div class="user-occupation">{{ text }}</div>
      <div class="buttons user__button" v-if="!plain">
        <button
          type="button"
          @click="$emit('handleClick', 'logout')"
          class="btn user__btn">Выйти
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "../avatar";

export default {
  components: {
    avatar,
  },
  props: {
    plain: Boolean,
    title: String,
    text:{
      type: String,
      default: ""
    },
    src: String
  },
  computed: {
    userPic() {
      if (!!this.src) {
        return this.src;
      } else {
        return require("../../../images/content/user.jpg").default;
      }
    },
  },
};
</script>

<style lang="postcss" src="./user.pcss"></style>
