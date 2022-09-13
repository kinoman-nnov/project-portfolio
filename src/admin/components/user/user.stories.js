import user from "./user";
import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
}

export default {
  title: "user",
  components: { user }
}

export const defaultView = () => ({
  components: { user },
  template: `
    <user
      title="User Name"
      plain
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

export const defaultViewWithText = () => ({
  components: { user },
  template: `
    <user
      title="User Name"
      text="Occupation"
      plain
    /> 
  `
});

defaultViewWithText.story = {
  name: "С текстом",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};

export const defaultViewWithBtn = () => ({
  components: { user },
  template: `
    <user
      title="User Name"
      @handleClick="onClick"
    /> 
  `,
  methods
});

defaultViewWithBtn.story = {
  name: "С кнопкой в мобильной версии",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};