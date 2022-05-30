<template lang="pug">
  .skill
    svg.skill__circle-shape(viewBox="0 0 100 100")
      circle.skill__circle.skill__circle_under(
        cx="50",
        cy="50",
        r="40"
      )
      circle.skill__circle.skill__circle_above(
        cx="50",
        cy="50",
        r="40",
        ref="colored-circle",
        stroke="url(#gradient)",
        transform="rotate(180 50 50)"
      )
      linearGradient#gradient(x1="0%", y1="0%", x2="100%", y2="0")
        stop(offset="0%", stop-color="#5500f2")
        stop(offset="100%", stop-color="#8f00ef")
    .skill__circle-text {{ skill.title }}
</template>

<script>
export default {
  props: {
    skill: Object
  },
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
}
</script>

<style lang="postcss" scoped>
</style>