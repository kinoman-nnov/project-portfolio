import formComponent from "../form.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onCancelForm: action("onCancelForm")
}

export default {
  title: "form/formReview",
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
      title="Добавление отзыва"
    />
  `,
  methods
});

defaultView.story = {
  name: "Форма для блока Отзывы",
}