import workCard from "./workCard.vue";

export default {
  title: "workCard",
  components: { workCard }
}

const work = {
  id: 0,
  title: "title",
  description: "description",
  link: "link",
  techs: "html, css, js",
  photo: "uploads/1qcdca40bbc093d_origin.png",
}

export const defaultView = () => ({
  components: { workCard },
  data() {
    return {
      work
    }
  },
  template: `
    <work-card
      :work="work"
    />
  `
});

defaultView.story = {
  name: "Стандартный вид",
}