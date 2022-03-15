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
        <a :href="work.link" class="link">{{ work.link }}</a>
        <div class="btns">
          <icon
            symbol="pencil"
            title="Править"
            @click="editWork">
          </icon>
          <icon
            symbol="trash"
            title="Удалить"
            @click="$emit('remove')">
          </icon>
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
        id: this.work.id,
        title: this.work.title,
        description: this.work.description,
        link: this.work.link,
        techs: this.work.techs,
        photoUpload: this.work.photo,
        preview: "",
      }
    }
  },
  computed: {    
    cover() {
      return `${baseUrl}/${this.work.photo}`;
    },
  },
  methods: {
    editWork() {
      this.currentWork.editmode = true;
      this.$emit("editWork", this.currentWork); 
    }
  }
};
</script>

<style lang="postcss" scoped src="./workCard.pcss"></style>
