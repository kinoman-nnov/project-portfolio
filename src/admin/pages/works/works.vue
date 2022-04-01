<template>
  <div class="works-page-component page-component">
    <div class="page-content">
      <div class="container">
        <div class="page-header">
          <div class="page-title">Блок "Работы"</div>
        </div>
        <div class="form">
          <form-work
            v-if="formIsShown"
            title="Добавление работы"
            :currentWork="currentWork"
            @cancelForm="formIsShown = false"
          />
        </div>
        <ul class="cards">
          <li class="item">
            <card simple>
              <square-btn 
                type="square"
                title="Добавить работу"
                @click="openForm"
              />
            </card>
          </li>
          <li class="item item-works" v-for="work in works" :key="work.id">
            <work-card
              :work="work"
              @remove-work="removeWork"
              @edit-work="editWork"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import formWork from "../../components/form";
import card from "../../components/card";
import workCard from "../../components/workCard";
import squareBtn from "../../components/button";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    formWork,
    card,
    workCard,
    squareBtn
  },
  computed: {
    ...mapState("works", {
      works: (state) => state.data,
    }),
  },
  data() {
    return {
      formIsShown: false,
      currentWork: {
        editmode: false
      }
    }
  },
  methods: {
    ...mapActions({
      fetchWorksAction: "works/fetch",
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
    },
    openForm() {
      this.formIsShown = true;
      this.currentWork.editmode = false;
    },
    editWork(work) {
      this.formIsShown = true;
      this.currentWork = {
        ...work
      }
    }
  },
  mounted() {
    this.fetchWorksAction();
  }
};
</script>

<style lang="postcss" scoped src="./works.pcss"></style>