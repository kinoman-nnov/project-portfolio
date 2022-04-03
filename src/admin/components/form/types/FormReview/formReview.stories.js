import formReview from "../../form.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onCancelForm: action("onCancelForm")
}

export default {
  title: "form/formReview",
  components: { formReview }
}

export const defaultView = () => ({
  components: { formReview },
  data() {
    return {
      currentWork: {
        editmode: false
      },
    }
  },
  template: `
    <form-review
      type="review"
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