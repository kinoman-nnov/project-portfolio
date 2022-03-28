import workCard from "./workCard.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemoveWork: action("onRemoveWork"),
  onEditWork: action("onEditWork")
}

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
  photo: "",
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
      @remove-work="onRemoveWork"
      @edit-work="onEditWork"
    />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
}