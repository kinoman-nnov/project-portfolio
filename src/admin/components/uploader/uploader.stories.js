import appUploader from "./uploader.vue";

export default {
  title: "uploader",
  components: { appUploader }
}

export const defaultView = () => ({
  components: { appUploader },
  template: `
    <app-uploader
    />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
}

export const roundView = () => ({
  components: { appUploader },
  template: `
    <app-uploader
      round
    />
  `,
});

roundView.story = {
  name: "В форме круга",
}

export const activetView = () => ({
  components: { appUploader },
  template: `
    <app-uploader
      errorMessage="Загрузите картинку"
    />
  `,
});

activetView.story = {
  name: "С ошибкой"
}