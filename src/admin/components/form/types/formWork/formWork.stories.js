import formWork from "../../form.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onCancelForm: action("onCancelForm")
}

export default {
  title: "form/formWork",
  components: { formWork }
}

export const defaultView = () => ({
  components: { formWork },
  data() {
    return {
      currentWork: {
        editmode: false
      },
    }
  },
  template: `
    <form-work
      :currentWork="currentWork"
      @cancelForm="onCancelForm"
      title="Добавление работы"
    />
  `,
  methods
});

defaultView.story = {
  name: "Форма для блока Работы",
}