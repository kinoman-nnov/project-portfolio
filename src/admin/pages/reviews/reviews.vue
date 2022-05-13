<template>
  <div class="reviews-page-component page-component">
    <div class="page-content">
      <div class="container">
        <div class="page-header">
          <div class="page-title">Блок "Отзывы"</div>
        </div>
        <div class="form">
          <form-review
            type="review"
            v-if="formIsShown"
            :currentReview="currentReview"
            @cancelForm="formIsShown = false"
            title="Добавление отзыва"
          />
        </div>
        <ul class="cards">
          <li class="item">
            <card simple>
              <square-btn 
                type="square"
                title="Добавить отзыв"
                @click="openForm"
              />
            </card>
          </li>
          <li class="item item-reviews" v-for="review in reviews" :key="review.id">
            <review-card
              :review="review"
              @remove-review="removeReview"
              @edit-review="editReview"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import formReview from "../../components/form";
import card from "../../components/card";
import reviewCard from "../../components/reviewCard";
import squareBtn from "../../components/button";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    formReview: () => import("../../components/form"),
    // formReview,
    card,
    reviewCard,
    squareBtn
  },
  computed: {
    ...mapState("reviews", {
      reviews: (state) => state.data,
    }),
  },
   data() {
    return {
      formIsShown: false,
      currentReview: {
        editmode: false
      }
    }
  },
  methods: {
    ...mapActions({
      fetchReviewsAction: "reviews/fetch",
      removeReviewAction: "reviews/remove",
      showTooltip: "tooltips/show",
    }),
    async removeReview(reviewId) {
      try {
        await this.removeReviewAction(reviewId);
        this.showTooltip({
          text: "отзыв удален",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        })
      }
    },
    openForm() {
      this.currentReview.editmode = false;
      this.formIsShown = true;
    },
    editReview(review) {
      this.formIsShown = true;
      this.currentReview = {
        ...review
      }
    }
  },
  mounted() {
    this.fetchReviewsAction();
  },
};
</script>

<style lang="postcss" scoped src="./reviews.pcss"></style>
