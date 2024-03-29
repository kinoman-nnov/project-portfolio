import icon from "./icon.vue";

export default {
  title: "icon",
  component: icon,
};

export const defaultView = () => ({
  components: { icon },
  template: `
    <icon />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};

export const labeledView = () => ({
  components: { icon },
  template: `
    <icon title="удалить" />
  `,
});

labeledView.story = {
  name: "С подписью",
};

export const iconedView = () => ({
  components: { icon },
  template: `
    <div>
      <icon symbol="pencil" />
      <icon symbol="cross" />
      <icon symbol="tick" />
      <icon symbol="trash" />
      <icon symbol="user" />
      <icon symbol="key" />
    </div>
  `,
});

iconedView.story = {
  name: "Доступные иконки",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};

export const grayscaleView = () => ({
  components: { icon },
  template: `
    <div>
      <icon grayscale symbol="pencil" />
      <icon grayscale symbol="cross" />
      <icon grayscale symbol="tick" />
      <icon grayscale symbol="trash" />
      <icon grayscale symbol="user" />
      <icon grayscale symbol="key" />
    </div>
  `,
});

grayscaleView.story = {
  name: "Черно-белые иконки",
};
