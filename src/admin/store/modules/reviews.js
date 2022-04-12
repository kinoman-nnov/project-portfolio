export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    ADD_REVIEW(state, newReview) {
      state.data.push(newReview);
    },
    // EDIT_WORK(state, workToEdit) {
    //   state.data = state.data.map(work => {
    //     if (work.id === workToEdit.work.id) { 
    //       work = workToEdit.work;
    //     }
    //     return work;
    //   });
    // },
    SET_REVIEWS(state, reviews) {
      state.data = reviews;
    },
    REMOVE_REVIEW(state, reviewIdToRemove) {
      state.data = state.data.filter(work => work.id !== reviewIdToRemove);
    }
  },
  actions: {
    async add({ commit }, newReview) {
      const formData = new FormData();

      Object.keys(newReview).forEach(item => {
        formData.append(item, newReview[item]);
      });

      // for (let entry of formData.entries()) { // вывод в консоль данных объекта formData
      //   console.log(entry);
      // }

      try {
        const { data } = await this.$axios.post('/reviews', formData);
        commit("ADD_REVIEW", data);
      } catch (error) {
        throw new Error("Произошла ошибка")
      }
    },
    // async edit({ commit }, workToEdit) {
    //   const formData = new FormData();

    //   Object.keys(workToEdit).forEach(item => {
    //     formData.append(item, workToEdit[item]);
    //   });

    //   // for (let entry of formData.entries()) { // вывод в консоль данных объекта formData
    //   //   console.log(entry);
    //   // }

    //   try {
    //     const { data } = await this.$axios.post(`/works/${workToEdit.id}`, formData);
    //     commit("EDIT_WORK", data);
    //   } catch (error) {
    //     throw new Error("Произошла ошибка")
    //   }
    // },
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get('/reviews/1'); // с сервера в data возвращается массив объектов с отзывами
        commit("SET_REVIEWS", data);
      } catch (error) {
        throw new Error("Произошла ошибка")
      }
    },
    async remove({ commit }, reviewIdToRemove) {
      try {
        const { data } = await this.$axios.delete(`/reviews/${reviewIdToRemove}`);
        commit("REMOVE_REVIEW", reviewIdToRemove)
      } catch (error) {
        throw new Error("Произошла ошибка");
      }
    },
  }
}