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
      currentReview: {
        editmode: false
      },
    }
  },
  template: `
    <form-review
      type="review"
      :currentReview="currentReview"
      @cancelForm="onCancelForm"
      title="Добавление отзыва"
    />
  `,
  methods
});

defaultView.story = {
  name: "Форма для блока Отзывы",
}