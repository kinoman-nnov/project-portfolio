import tagsList from "./tagsList.vue";

export default {
  title: "tagsList",
  components: { tagsList }
}

export const defaultView = () => ({
  components: { tagsList },
  data() {
    return {
      tags: "css, html, javascript"
    }
  },
  template: `
    <tags-list
      :tags="tags"
    />
  `
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};