<template>
  <div class="form-component" v-if="currentReview.editmode === false">
    <form class="form" @submit.prevent="handleSubmitAddReview">
      <card :title="title" class="card-component__review">
        <div class="form-container" slot="content">
          <div class="form-columns">
            <div class="form-col form-col__review-left">
              <app-uploader
                round
                :currentForm="currentReview"
                :errorMessage="validation.firstError('newReview.preview')"
                @upload-image="uploaderImg"
              />
            </div>
            <div class="form-col form-col__review-right">
              <div class="form-row__container">
                <div class="form-row form-row--review">
                  <app-input
                    v-model="newReview.author"
                    title="Имя автора"
                    :errorMessage="validation.firstError('newReview.author')"
                  />
                </div>
                <div class="form-row form-row--review">
                  <app-input
                    v-model="newReview.occ"
                    title="Титул автора"
                    :errorMessage="validation.firstError('newReview.occ')"
                  />
                </div>
              </div>
              <div class="form-row">
                <app-input
                  v-model="newReview.text"
                  field-type="textarea"
                  title="Отзыв"
                  :errorMessage="validation.firstError('newReview.text')"
                />
              </div>
            </div>
          </div>
          <div class="form-btns">
            <div class="btn">
              <app-button title="Отмена" @click="cancelForm" plain />
            </div>
            <div class="btn">
              <app-button title="Сохранить" typeAttr="submit" />
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
  <div class="form-component" v-else>
    <form class="form" @submit.prevent="handleSubmitEditReview">
      <card title="Редактирование отзыва" class="card-component__review">
        <div class="form-container" slot="content">
          <div class="form-columns">
            <div class="form-col form-col__review-left">
              <app-uploader
                round
                :currentForm="currentReview"
                @upload-image="uploaderImgCurrentReview"
              />
            </div>
            <div class="form-col form-col__review-right">
              <div class="form-row__container">
                <div class="form-row form-row--review">
                  <app-input
                    v-model="currentReview.author"
                    title="Имя автора"
                    :errorMessage="validation.firstError('currentReview.author')"
                  />
                </div>
                <div class="form-row form-row--review">
                  <app-input
                    v-model="currentReview.occ"
                    title="Титул автора"
                    :errorMessage="validation.firstError('currentReview.occ')"
                  />
                </div>
              </div>
              <div class="form-row">
                <app-input
                  v-model="currentReview.text"
                  field-type="textarea"
                  title="Отзыв"
                  :errorMessage="validation.firstError('currentReview.text')"
                />
              </div>
            </div>
          </div>
          <div class="form-btns">
            <div class="btn">
              <app-button title="Отмена" @click="cancelForm" plain />
            </div>
            <div class="btn">
              <app-button title="Сохранить" typeAttr="submit" />
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import card from "../../../card";
import appUploader from "../../../uploader";
import appButton from "../../../button";
import appInput from "../../../input";
import tagsAdder from "../../../tagsAdder";
import { mapActions } from "vuex";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixin: [ValidatorMixin],
  validators: {
    "newReview.preview": (value) => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "newReview.author": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "newReview.occ": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "newReview.text": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    // "currentReview.preview": (value) => {  // для редактирования отзыва поле загрузки картинки не будет пустым
    //   return Validator.value(value).required("Загрузите картинку");  // поэтому его не надо валидировать
    // },
    "currentReview.author": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "currentReview.occ": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "currentReview.text": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
  },
  components: {
    card,
    appUploader,
    appButton,
    appInput,
    tagsAdder,
    tooltip: () => import("components/tooltip"),
  },
  props: {
    title: String,
    currentReview: Object,
  },
  data() {
    return {
      hovered: false,
      newReview: {
        author: "",
        occ: "",
        text: "",
        photo: {},
        preview: "",
      },
      currentReviewValue: {
        author: this.currentReview.author,
        occ: this.currentReview.occ,
        text: this.currentReview.text,
        photo: this.currentReview.photo,
      },
    };
  },
  watch: {
    currentReview(newVal, oldVal) {
      if (!!newVal === true) { 
        this.currentReviewValue = {
          ...newVal,
        };
      }
    }
  },
  methods: {
    ...mapActions({
      addNewReview: "reviews/add",
      editcurrentReview: "reviews/edit",
      showTooltip: "tooltips/show",
    }),
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },
    uploaderImg(reviewPhoto) {
      const { photo, preview } = reviewPhoto;
      this.newReview.photo = photo;
      this.newReview.preview = preview;
    },
    uploaderImgCurrentReview(currentReviewPhoto) {
      const { photo, previewEditmode } = currentReviewPhoto;
      this.currentReview.photo = photo;
      this.currentReview.preview = previewEditmode;
    },
    async handleSubmitAddReview() {
      const nameFieldReviewArr = [
        "newReview.preview",
        "newReview.author",
        "newReview.occ",
        "newReview.text",
      ];
      if ((await this.$validate(nameFieldReviewArr)) === false) return;

      try {
        await this.addNewReview(this.newReview);

        this.$emit("cancelForm");
        this.showTooltip({
          text: "отзыв добавлен",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
    async handleSubmitEditReview() {
      const nameFieldCurReviewArr = [
        // "currentReview.preview",
        "currentReview.author",
        "currentReview.occ",
        "currentReview.text",
      ];
      if ((await this.$validate(nameFieldCurReviewArr)) === false) return;

      const { author, occ, text, photo } = this.currentReview;
      const {
        author: authorValue,
        occ: occValue,
        text: textValue,
        photo: photoValue,
      } = this.currentReviewValue;

      if (
        author.trim() === authorValue.trim() &&
        occ.trim() === occValue.trim() &&
        text.trim() === textValue.trim() &&
        photo === photoValue
      ) {
        this.$emit("cancelForm");
      } else {
        try {
          await this.editcurrentReview(this.currentReview);
          this.$emit("cancelForm");
          this.showTooltip({
            text: "отзыв отредактирован",
            type: "success",
          });
        } catch (error) {
          this.showTooltip({
            text: error.message,
            type: "error",
          });
        }
      }
    },
    cancelForm() {
      this.currentReview.editmode = false;
      this.$emit("cancelForm");
    },
  },
};
</script>

<style lang="postcss" scoped src="./formReview.pcss"></style>