<template lang="pug">
ul.socials
  li(v-for="(item, index) in socials", :key="item.id").socials__item
    a(
      :href="urls[index]"
      target="_blank"
    ).socials__link
      icons-comp(:name="item", :className="'socials__icon'")
</template>

<script>
import icons from "../icons-app";
import config from "../../../env.paths.json";

export default {
  components: {
    iconsComp: icons,
  },
  props: {
    socials: Array,
  },
  computed: {
    urls() {
      const socialsUrlsArr = [];
      const socialsUrlsObj = config.SOCIALS_URL;
      for (const url in socialsUrlsObj) {
        socialsUrlsArr.push(socialsUrlsObj[url]);
      }
      return socialsUrlsArr;
    }
  },
};
</script>

<style lang="postcss" scoped>
</style>