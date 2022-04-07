import userBtn from "../../button.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onChange: action("onChange")
}

export default {
  title: "button/userBtn",
  components: { userBtn },
};

export const fileView = () => ({
  components: { userBtn },
  template: `
    <user-btn type="user" typeAttr="file" @change="onChange" />
  `,
  methods
});

fileView.story = {
  name: "С иконкой пользователя",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};