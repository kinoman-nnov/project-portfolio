import reviewCard from "./reviewCard.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemoveReview: action("onRemoveReview"),
  onEditReview: action("onEditReview")
}

export default {
  title: "reviewCard",
  components: { reviewCard }
}

const review = {
  author: "Name",
  occ: "OCC",
  text: "text",
  photo: "",
}

export const defaultView = () => ({
  components: { reviewCard },
  data() {
    return {
      review
    }
  },
  template: `
    <review-card
      :review="review"
      @remove-review="onRemoveReview"
      @edit-review="onEditReview"
    />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
}