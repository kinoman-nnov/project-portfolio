<template>
  <div class="about-page-components">
    <div class="page-content">
      <div class="container" v-if="categories.length">
        <div class="page-header">
          <div class="page-title">Блок "Обо мне"</div>
          <iconed-button
            type="iconed"
            v-if="emptyCatIsShown === false"
            @click="emptyCatIsShown = true"
            title="Добавить группу"
          />
        </div>
        <ul class="skills">
          <li class="item" v-if="emptyCatIsShown">
            <category
              @remove="emptyCatIsShown = false"
              @approve="createCategory"
              empty
            />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category
              :title="category.category"
              :skills="category.skills"
              @create-skill="createSkill($event, category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill"
              @approve="editCategory($event, category.id)"
              @remove="removeCategory(category.id)"
            />
          </li>
        </ul>
      </div>
      <div class="container" v-else>loading...</div>
    </div>
  </div>
</template>

<script>
import button from "../../components/button";
// import category from "../../components/category";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedButton: button,
    category: () => import("../../components/category"),
  },
  data() {
    return {
      // categories: [], // шаблонные категории из json (до введения store)
      emptyCatIsShown: false,
    };
  },
  computed: {
    ...mapState("categories", {
      categories: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      editCategoryAction: "categories/edit",
      removeCategoryAction: "categories/remove",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
      showTooltip: "tooltips/show",
    }),
    async createSkill(skill, categoryId) {
      try {
        const newSkill = {
        ...skill,
        category: categoryId,
      };
      await this.addSkillAction(newSkill);
      skill.title = "";
      skill.percent = "";
      this.showTooltip({
          text: "навык добавлен",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
      
    },
    async editSkill(skill) {
      try {
        await this.editSkillAction(skill);
        skill.editmode = false;
        this.showTooltip({
          text: "навык отредактирован",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
    async removeSkill(skill) {
      try {
        await this.removeSkillAction(skill);
        this.showTooltip({
          text: "навык удален",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
    async createCategory(currentCategory) {
      try {
        const categoryTitle = currentCategory.categoryTitle;
        await this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
        this.showTooltip({
          text: "категория создана",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
    async editCategory(categoryToEdit, categoryId) {
      try {
        const newCategory = {
          title: categoryToEdit.categoryTitle,
          id: categoryId,
        };
        await this.editCategoryAction(newCategory);
        categoryToEdit.editmode = false;
        this.showTooltip({
          text: "категория отредактирована",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
    async removeCategory(categoryId) {
      try {
        await this.removeCategoryAction(categoryId);
        this.showTooltip({
          text: "категория удалена",
          type: "success",
        });
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
      }
    },
  },
  created() {
    this.fetchCategoriesAction();
    // this.categories = require("../../data/categories.json"); // шаблон
  },
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>