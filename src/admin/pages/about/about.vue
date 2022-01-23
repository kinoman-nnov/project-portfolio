<template>
  <div class="about-page-components">
    <div class="page-content">
      <div class="container" v-if="categories.length">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
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
import headline from "../../components/headline";
import user from "../../components/user";
import navigation from "../../components/navigation";
import button from "../../components/button";
import category from "../../components/category";
import { mapActions, mapState } from "vuex";
import categoryVue from '../../components/category/category.vue';

export default {
  components: {
    headline,
    user,
    navigation,
    iconedButton: button,
    category,
  },
  data() {
    return {
      // categories: [], // шаблонные категории из json
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
    }),
    async createSkill(skill, categoryId) {
      const newSkill = { 
        ...skill,
        category: categoryId,
      };
      await this.addSkillAction(newSkill);
      skill.title = "";
      skill.percent = "";
    },
    removeSkill(skill) {
      this.removeSkillAction(skill);
    },
    async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
    },
    async createCategory(currentCategory) {
      const categoryTitle = currentCategory.categoryTitle;
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
      } catch (error) {
        console.log(error.message);
      }
    },
    async editCategory(categoryToEdit, categoryId) {
      const newCategory = {
        title: categoryToEdit.categoryTitle,
        id: categoryId,
      };
      await this.editCategoryAction(newCategory);
      categoryToEdit.editmode = false;
    },
    removeCategory(categoryId) {
      this.removeCategoryAction(categoryId);
    },
  },
  created() {
    this.fetchCategoriesAction();
    // this.categories = require("../../data/categories.json"); // шаблон
  },
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>