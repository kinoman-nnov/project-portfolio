<template>
  <card>
    <div slot="title" class="card-review__header">
      <user
        :title="review.author"
        :text="review.occ"
        :src="cover"
        class="review-user-title"
        plain
      />
    </div>
    <div class="review-container" slot="content">
      <div class="text">{{ review.text }}</div>
      <div class="btns">
        <icon symbol="pencil" title="Править" @click="editReview"> </icon>
        <icon symbol="trash" title="Удалить" @click="$emit('remove-review', review.id)"> </icon>
      </div>  
    </div>
  </card>
</template>

<script>
import card from "../card";
import user from "../user";
import icon from "../icon";
import $axios from "../../requests";

const baseUrl = $axios.defaults.baseURL;

export default {
  components: {
    card, user, icon
  },
  props: {
    review: Object,
  },
  data() {
    return {
      currentReview: {
        id: "",
        author: "",
        occ: "",
        text: "",
        photo: "",
      },
    };
  },
  computed: {
    cover() {
      return `${baseUrl}/${this.review.photo}`;
    },
  },
  methods: {
    editReview() {
      const { id, author, occ, text } = this.review;
      this.currentReview = {
        id,
        author,
        occ,
        text,
        preview: this.cover,
        photo: this.cover,
        editmode: true,
      };

      this.$emit("edit-review", this.currentReview);
    },
  },
};

</script>

<style lang="postcss" scoped src="./reviewCard.pcss"></style>
