<template>
  <div class="uploader-wrapper">
    <div class="uploader-container" v-if="round === false">
      <label
        :style="{ backgroundImage: `url(${uploader.preview})` }"
        :class="[
          'uploader',
          { active: uploader.preview },
          { hovered: hovered },
          { error: errorMessage },
        ]"
        @dragover="handleDragOver"
        @dragleave="hovered = false"
        @drop="handleChange"
      >
        <div class="uploader-content">
          <div class="uploader-title">Перетащите или загрузите картинку</div>
          <div class="uploader-btn">
            <app-button typeAttr="file" @change="handleChange" title="Загрузить" />
          </div>
        </div>      
      </label>
    </div>
    <div class="uploader-container  uploader-container--round" v-else>
      <label
        :style="{ backgroundImage: `url(${uploader.preview})` }"
        :class="[
          'uploader',
          { round },
          { active: uploader.preview },
          { hovered: hovered },
          { error: errorMessage },
        ]"
        @dragover="handleDragOver"
        @dragleave="hovered = false"
        @drop="handleChange"
      ></label>
      <div class="uploader-content uploader-content--round">
        <div class="uploader-btn">
          <app-button plain typeAttr="file" @change="handleChange" title="Загрузить" />
        </div>
      </div>
    </div>
    <div class="uploader__error-tooltip">
      <tooltip :text="errorMessage"></tooltip>
    </div>
  </div>  
</template>

<script>
import appButton from "../button";
import tooltip from "../tooltip";

export default {
  components: {
    appButton,
    tooltip,
  },
  props: {
    currentWork: Object,
    round: Boolean,
    errorMessage: {
      type: String,
      default: "",
    },
  },
  data() { console.log("round",this.round);
    return {
      hovered: false,
      uploader: {
        photo: {},
        preview: "",
      },
    };
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
      this.uploader.photo = file;
      // this.currentWork.photo = file;

      const promise = this.renderPhoto(file);
      promise.then(
        (value) => {
          this.uploader.preview = value;
          const newUploader = { ...this.uploader };
          this.$emit("upload-image", newUploader);
        },
        (error) => console.log(`Ошибка: ${error.message}`)
      );
      this.hovered = false;
    },
    renderPhoto(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () =>
          reject(new Error(`Ошибка загрузки картинки ${file}`));
      });
    },
  },
};
</script>

<style lang="postcss" scoped src="./uploader.pcss"></style>