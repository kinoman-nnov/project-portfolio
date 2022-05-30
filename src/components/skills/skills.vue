<template lang="pug">
ul.skills
  li.skills__item(v-for="category in skills", :key="category.id")
    skill-row(:category="category")
</template>

<script>
import axios from "axios";
import config from "../../../env.paths.json";
import skillRow from "./skill-row";

axios.defaults.baseURL = config.BASE_URL;

export default {
  components: {
    skillRow
  },
  data() {
    return {
      skills: [],
    };
  },
  
  async created() {
    // запросить данные, не обращаясь к реальным дом-узлам
    const { data } = await axios.get("/categories/1");
    this.skills = data;
    // this.skills = require("../data/skills.json"); // запросить skills из файла json
  },
};
</script>

<style lang="postcss" scoped>
</style>