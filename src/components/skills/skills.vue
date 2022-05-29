<template lang="pug">
ul.skills
  li.skills__item(v-for="category in skills", :key="category.id")
    skill-row(:category="category")
    //- .skills-row
    //-   .skills-row__title {{ category.category }}
    //-   ul.skills-row__list
    //-     li.skills-row__item(v-for="skill in category.skills", :key="skill.id")
    //-       skill-item(:skill="skill")
          //- .skill
          //-   svg.skill__circle-shape(viewBox="0 0 100 100")
          //-     circle.skill__circle.skill__circle_under(
          //-       cx="50",
          //-       cy="50",
          //-       r="40"
          //-     )
          //-     circle.skill__circle.skill__circle_above(
          //-       cx="50",
          //-       cy="50",
          //-       r="40",
          //-       ref="colored-circle",
          //-       stroke="url(#gradient)",
          //-       transform="rotate(180 50 50)"
          //-     )
          //-     linearGradient#gradient(x1="0%", y1="0%", x2="100%", y2="0")
          //-       stop(offset="0%", stop-color="#5500f2")
          //-       stop(offset="100%", stop-color="#8f00ef")
          //-   .skill__circle-text {{ skill.title }}
</template>

<script>
import axios from "axios";
import config from "../../../env.paths.json";
import skillRow from "./skill-row";

axios.defaults.baseURL = config.BASE_URL;

// const drawPercentageCircle = () => {
//   const circle = this.$refs["colored-circle"];
//   const dashArray = parseInt(
//     getComputedStyle(circle).getPropertyValue("stroke-dasharray")
//   );

//   const percent = (dashArray / 100) * (100 - this.skill.percent);
//   console.log(percent);
//   circle.style.strokeDashoffset = percent;
// };

// const skillsRow = {
//   props: ["category"],
//   template: "#skills-row",
//   components: {
//     skillsItem
//   },
// };

export default {
  components: {
    skillRow
  },
  data() {
    // записываем данные в объект data, чтобы обращаться к ним внутри компонента
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
  mounted() {
    this.drawPercentageCircle();
  },
};
</script>

<style lang="postcss" scoped>
</style>