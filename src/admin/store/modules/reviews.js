export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    ADD_REVIEW(state, newReview) {
      state.data.push(newReview);
    },
    EDIT_REVIEW(state, reviewToEdit) {
      state.data = state.data.map(review => {
        if (review.id === reviewToEdit.review.id) { 
          review = reviewToEdit.review;
        }
        return review;
      });
    },
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
    async edit({ commit }, reviewToEdit) {
      const formData = new FormData();

      Object.keys(reviewToEdit).forEach(item => {
        formData.append(item, reviewToEdit[item]);
      });

      // for (let entry of formData.entries()) { // вывод в консоль данных объекта formData
      //   console.log(entry);
      // }

      try {
        const { data } = await this.$axios.post(`/reviews/${reviewToEdit.id}`, formData);
        commit("EDIT_REVIEW", data);
      } catch (error) {
        throw new Error("Произошла ошибка")
      }
    },
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