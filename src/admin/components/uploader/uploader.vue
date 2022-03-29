<template>
  <label
    :style="{ backgroundImage: `url(${newWork.preview})` }"
    :class="[
      'uploader',
      { active: newWork.preview },
      { hovered: hovered },
      { error: errorMessage },
    ]"
    @dragover="handleDragOver"
    @dragleave="hovered = false"
    @drop="handleChange"
  >
    <div class="uploader-content">
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
    </div>
    <div class="uploader__error-tooltip">
      <tooltip
        :text="errorMessage"
      ></tooltip>
    </div>
  </label>
</template>

<script>
import appButton from "../button";
import tooltip from "../tooltip";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixin: [ValidatorMixin],
  validators: {
    "newWork.preview": (value) => {
      return Validator.value(value).required("Загрузите картинку");
    },
  },
  components: {
    appButton, tooltip 
  },
  props: {
    currentWork: Object,
    errorMessage: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      hovered: false,
      newWork: {
        photo: {},
        preview: "",
      },
    }
  },
  methods: {
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },
    handleChange(event) {
      event.preventDefault();
      const file = event.dataTransfer
        ? event.dataTransfer.files[0]
        : event.target.files[0];
      this.newWork.photo = file;
      this.currentWork.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
      this.$emit('upload-image', this.newWork, this.currentWork)
    },
    renderPhoto(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.newWork.preview = reader.result;
        this.currentWork.preview = reader.result;
      };
    },
  },
  
  mounted() {
    console.log("upload", this.newWork); 
  }
}
</script>

<style lang="postcss" scoped src="./uploader.pcss"></style>