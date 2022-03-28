<template>
  <card simple>
    <div class="works-wrapper">
      <div class="pic">
        <img class="image" :src="cover" />
        <div class="tag">
          <tags-list :tags="work.techs" />
        </div>
      </div>
      <div class="data">
        <div class="title">{{ work.title }}</div>
        <div class="text">
          <p>{{ work.description }}</p>
        </div>
        <a :href="work.link" class="link link-workCard">{{ work.link }}</a>
        <div class="btns">
          <icon symbol="pencil" title="Править" @click="editWork"> </icon>
          <icon symbol="trash" title="Удалить" @click="$emit('remove-work', work.id)"> </icon>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import card from "../card";
import icon from "../icon";
import tagsList from "../tagsList";
import $axios from "../../requests";

const baseUrl = $axios.defaults.baseURL;

export default {
  components: {
    card,
    icon,
    tagsList,
  },
  props: {
    work: Object,
  },
  data() {
    return {
      currentWork: {
        id: "",
        title: "",
        description: "",
        link: "",
        techs: "",
        photo: "",
      },
    };
  },
  computed: {
    cover() {
      return `${baseUrl}/${this.work.photo}`;
    },
  },
  methods: {
    editWork() {
      const { id, title, description, link, techs } = this.work;
      this.currentWork = {
        id,
        title,
        description,
        link,
        techs,
        preview: "",
        photo: this.cover,
        editmode: true,
      };

      this.$emit("edit-work", this.currentWork);
    },
  },
};
</script>

<style lang="postcss" scoped src="./workCard.pcss"></style>
