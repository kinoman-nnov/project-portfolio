import Vue from "vue";

const skillsItem = {
  props: ["skill"],
  template: "#skills-item",
  methods: {
    drawPercentageCircle() {
      const circle = this.$refs["colored-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );

      const percent = (dashArray / 100) * (100 - this.skill.percent);

      circle.style.strokeDashoffset = percent;
    },
  },
  mounted() {
    this.drawPercentageCircle();
  },
};

const skillsRow = {
  props: ["category"],
  template: "#skills-row",
  components: {
    skillsItem
  },
};

new Vue({
  el: "#skills-component", // id компонента Vue в index.pug
  template: "#skills-list", // id шаблона компонента skills.pug
  components: {
    skillsRow
  },
  data() { // записываем данные в объект data, чтобы обращаться к ним внутри компонента
    return {
      skills: []
    };
  },
  created() { // запросить данные, не обращаясь к реальным дом-узлам
    this.skills = require("../data/skills.json");
  },
});