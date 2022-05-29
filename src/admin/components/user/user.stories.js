import user from "./user";

export default {
  title: "user",
  components: { user }
}

export const defaultView = () => ({
  components: { user },
  template: `
    <user
      title="User Name"
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

export const defaultViewWithOcc = () => ({
  components: { user },
  template: `
    <user
      title="User Name"
      occ="Occupation"
    /> 
  `
});

defaultViewWithOcc.story = {
  name: "С полем - занятость",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};