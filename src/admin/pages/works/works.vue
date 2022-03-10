<template>
  <div class="works-page-component page-component">
    <div class="page-content">
      <div class="container">
        {{ works }}
        <div class="page-header">
          <div class="page-title">Блок "Работы"</div>
        </div>
        <div class="form">
          <form-component />
        </div>
        <ul class="cards">
          <li class="item" v-for="work in works" :key="work.id">
            <work-card
              :work="work"
              @remove="removeWork(work.id)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import form from "../../components/form";
import workCard from "../../components/workCard";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    formComponent: form,
    workCard,
  },
  computed: {
    ...mapState("works", {
      works: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchWorks: "works/fetch",
      removeWorkAction: "works/remove",
      showTooltip: "tooltips/show",
    }),
    async removeWork(workId) {
      try {
        await this.removeWorkAction(workId);
        this.showTooltip({
          text: "работа удалена",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        })
      }
    }
  },
  mounted() {
    this.fetchWorks();
  }
};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>