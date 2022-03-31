<template>
  <div class="form-component" v-if="currentWork.editmode === false">
    <form class="form" @submit.prevent="handleSubmitAddWork">
      <card :title="title">
        <div class="form-container" slot="content">
          <div class="form-columns">
            <div class="form-col">
              <app-uploader
                
                :currentWork="currentWork"
                :errorMessage="validation.firstError('newWork.preview')"
                @upload-image="uploaderImg"
              />
            </div>
            <div class="form-col">
              <div class="form-row">
                <app-input
                  v-model="newWork.title"
                  title="Название"
                  :errorMessage="validation.firstError('newWork.title')"
                />
              </div>
              <div class="form-row">
                <app-input
                  v-model="newWork.link"
                  title="Ссылка"
                  :errorMessage="validation.firstError('newWork.link')"
                />
              </div>
              <div class="form-row">
                <app-input
                  v-model="newWork.description"
                  field-type="textarea"
                  title="Описание"
                  :errorMessage="validation.firstError('newWork.description')"
                />
              </div>
              <div class="form-row">
                <tags-adder
                  v-model="newWork.techs"
                  :errorMessage="validation.firstError('newWork.techs')"
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
    <form class="form" @submit.prevent="handleSubmitEditWork">
      <card title="редактирование работы">
        <div class="form-container" slot="content">
          <div class="form-columns">
            <div class="form-col">
              <label
                :style="{ backgroundImage: `url(${coverPreview})` }"
                :class="[
                  'uploader',
                  { active: currentWork.preview || currentWork.photo },
                  { hovered: hovered },
                ]"
                @dragover="handleDragOver"
                @dragleave="hovered = false"
                @drop="handleChange"
              >
                <div class="uploader-title">
                  Перетащите или загрузите картинку
                </div>
                <div class="uploader-btn">
                  <app-button
                    typeAttr="file"
                    @change="handleChange"
                    title="Загрузить"
                  />
                </div>
              </label>
            </div>
            <div class="form-col">
              <div class="form-row">
                <app-input
                  v-model="currentWork.title"
                  title="Название"
                  :errorMessage="validation.firstError('currentWork.title')"
                />
              </div>
              <div class="form-row">
                <app-input
                  v-model="currentWork.link"
                  title="Ссылка"
                  :errorMessage="validation.firstError('currentWork.link')"
                />
              </div>
              <div class="form-row">
                <app-input
                  v-model="currentWork.description"
                  field-type="textarea"
                  title="Описание"
                  :errorMessage="
                    validation.firstError('currentWork.description')
                  "
                />
              </div>
              <div class="form-row">
                <tags-adder
                  v-model="currentWork.techs"
                  :errorMessage="validation.firstError('currentWork.techs')"
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
import card from "../card";
import appUploader from "../uploader";
import appButton from "../button";
import appInput from "../input";
import tagsAdder from "../tagsAdder";
import { mapActions } from "vuex";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixin: [ValidatorMixin],
  validators: {
    "newWork.preview": (value) => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "newWork.title": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "newWork.link": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "newWork.description": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "newWork.techs": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    // "currentWork.preview": (value) => {  // для редактирования работы поле загрузки картинки не будет пустым
    //   return Validator.value(value).required("Загрузите картинку");  // поэтому его не надо валидировать
    // },
    "currentWork.title": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "currentWork.link": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "currentWork.description": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "currentWork.techs": (value) => {
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
    currentWork: Object,
  },
  computed: {
    coverPreview() {
      if (!!this.currentWork.preview === false) {
        return this.currentWork.photo;
      } else {
        return this.currentWork.preview;
      }
    },
  },
  data() {
    return {
      hovered: false,
      newWork: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo: {},
        preview: "",
      },
      currentWorkValue: {
        title: this.currentWork.title,
        link: this.currentWork.link,
        description: this.currentWork.description,
        techs: this.currentWork.techs,
        photo: this.currentWork.photo,
      },
    };
  },
  methods: {
    ...mapActions({
      addNewWork: "works/add",
      editCurrentWork: "works/edit",
      showTooltip: "tooltips/show",
    }),
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },
    uploaderImg(workPhoto, currentWorkPhoto) {
      const { photo, preview } = workPhoto;
      this.newWork.photo = photo;
      this.newWork.preview = preview;
    },
    async handleSubmitAddWork() {
      const nameFieldWorkArr = [
        "newWork.preview",
        "newWork.title",
        "newWork.link",
        "newWork.description",
        "newWork.techs",
      ];
      if ((await this.$validate(nameFieldWorkArr)) === false) return;

      try {
        await this.addNewWork(this.newWork);

        this.$emit("cancelForm");
        this.showTooltip({
          text: "работа добавлена",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
    async handleSubmitEditWork() {
      const nameFieldCurWorkArr = [
        // "currentWork.preview",
        "currentWork.title",
        "currentWork.link",
        "currentWork.description",
        "currentWork.techs",
      ];
      if ((await this.$validate(nameFieldCurWorkArr)) === false) return;

      const { title, link, description, techs, photo } = this.currentWork;
      const {
        title: titleValue,
        link: linkValue,
        description: descValue,
        techs: techsValue,
        photo: photoValue,
      } = this.currentWorkValue;

      if (
        title.trim() === titleValue.trim() &&
        link.trim() === linkValue.trim() &&
        description.trim() === descValue.trim() &&
        techs.trim() === techsValue.trim() &&
        photo === photoValue
      ) {
        this.$emit("cancelForm");
      } else {
        try {
          await this.editCurrentWork(this.currentWork);
          this.$emit("cancelForm");
          this.showTooltip({
            text: "работа отредактирована",
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
    // handleChange(event) {
    //   event.preventDefault();
    //   const file = event.dataTransfer
    //     ? event.dataTransfer.files[0]
    //     : event.target.files[0];
    //   this.newWork.photo = file;
    //   this.currentWork.photo = file;
    //   this.renderPhoto(file);
    //   this.hovered = false;
    // },
    // renderPhoto(file) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = () => {
    //     this.newWork.preview = reader.result;
    //     this.currentWork.preview = reader.result;
    //   };
    // },
    cancelForm() {
      this.currentWork.editmode = false;
      this.$emit("cancelForm");
    },
  },
};
</script>

<style lang="postcss" scoped src="./form.pcss"></style>