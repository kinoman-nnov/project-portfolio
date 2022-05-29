<template>
  <div class="user-component">
    <avatar size="2.7" :src="userPic" />
    <div class="user-container">
      <div class="username">{{ title }}</div>
      <div class="user-occupation">{{ occ }}</div>
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
    title: String,
    occ: String,
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

<style lang="postcss">
.user-component {
  display: flex;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  color: #fff;
}

.user-container {
  margin-left: 18px;
}

.user-occupation{
  font-size: 16px;
  color: rgba(65, 76, 99, 0.5);
}
</style>
