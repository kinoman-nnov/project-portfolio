import appUploader from "./uploader.vue";

export default {
  title: "uploader",
  components: { appUploader }
}

export const defaultView = () => ({
  components: { appUploader },
  data() {
    return {
      currentForm: {
        editmode: false
      },
    }
  },
  template: `
    <app-uploader
      currentForm="currentForm"
    />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
}

export const roundView = () => ({
  components: { appUploader },
  data() {
    return {
      currentForm: {
        editmode: false
      },
    }
  },
  template: `
    <app-uploader
      round
      currentForm="currentForm"
    />
  `,
});

roundView.story = {
  name: "В форме круга",
}

export const activetView = () => ({
  components: { appUploader },
  data() {
    return {
      currentForm: {
        editmode: false
      },
    }
  },
  template: `
    <app-uploader
      currentForm="currentForm"
      errorMessage="Загрузите картинку"
    />
  `,
});

activetView.story = {
  name: "С ошибкой"
}