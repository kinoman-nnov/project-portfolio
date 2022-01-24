export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => (state.data.unshift(category)),
    EDIT_CATEGORY: (state, categoryToEdit) => {
      state.data = state.data.map(category => {
        if (category.id === categoryToEdit.id) {
          category.category = categoryToEdit.category;
        }
        return category;
      });
    },
    REMOVE_CATEGORY: (state, categoryIdToRemove) => {
      state.data = state.data.filter(category => category.id !== categoryIdToRemove);
    },
    ADD_SKILL: (state, newSkill) => {
      state.data = state.data.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, skillToRemove) => {
      state.data = state.data.map(category => {
        if (category.id === skillToRemove.category) {
          category.skills = category.skills.filter(skill => skill.id !== skillToRemove.id)
        }
        return category;
      });
    },
    EDIT_SKILL: (state, skillToEdit) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === skillToEdit.id ? skillToEdit : skill
        });
      }
      const findCategory = category => {
        if (category.id === skillToEdit.category) {
          editSkillInCategory(category);
        }
        return category;
      }
      state.data = state.data.map(findCategory);
    }
  },
  actions: {
    async create({ commit }, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title }); // с сервера в data возвращается объект category
        const newCategory = {
          ...data,
          skills: []
        };
        commit("ADD_CATEGORY", newCategory);
      } catch (error) {
        throw new Error("Произошла ошибка")
      }
    },
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get('/categories/1'); // с сервера в data возвращается массив объектов с категориями
        commit("SET_CATEGORIES", data);
      } catch (error) {
        console.log(error.message);
        throw new Error("Произошла ошибка")
      }
    },
    async edit({ commit }, categoryToEdit) {
      try {
        const { data } = await this.$axios.post(`/categories/${categoryToEdit.id}`, { title: categoryToEdit.title }); // с сервера в data возвращается объект с категорией(новый title)
        commit("EDIT_CATEGORY", data.category);
      } catch (error) {
        console.log(error);
        throw new Error("Произошла ошибка")
      }
    },
    async remove({ commit }, categoryIdToRemove) {
      try {
        const { data } = await this.$axios.delete(`/categories/${categoryIdToRemove}`);  // с сервера в data возвращается объект с message "запись удалена"
        commit("REMOVE_CATEGORY", categoryIdToRemove);
      } catch (error) {
        console.log(error);
        throw new Error("Произошла ошибка");
      }
    },
  }
}