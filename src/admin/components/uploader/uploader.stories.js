import appUploader from "./uploader.vue";

export default {
  title: "uploader",
  components: { appUploader }
}

export const defaultView = () => ({
  components: { appUploader },
  data() {
    return {
      currentWork: {
        editmode: false
      },
    }
  },
  template: `
    <app-uploader
      currentWork="currentWork"
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
      currentWork: {
        editmode: false
      },
    }
  },
  template: `
    <app-uploader
      round
      currentWork="currentWork"
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
      currentWork: {
        editmode: false
      },
    }
  },
  template: `
    <app-uploader
      currentWork="currentWork"
      errorMessage="Загрузите картинку"
    />
  `,
});

activetView.story = {
  name: "С ошибкой"
}