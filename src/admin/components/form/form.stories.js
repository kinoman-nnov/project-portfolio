import formComponent from "./form.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemoveWork: action("onRemoveWork"),
  onCancelForm: action("onCancelForm")
}

export default {
  title: "form/formWork",
  components: { formComponent }
}

export const defaultView = () => ({
  components: { formComponent },
  data() {
    return {
      currentWork: {
        editmode: false
      },
    }
  },
  template: `
    <form-component
      :currentWork="currentWork"
      @cancelForm="onCancelForm"
    />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
}