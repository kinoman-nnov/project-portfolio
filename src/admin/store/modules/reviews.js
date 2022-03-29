export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    // ADD_WORK(state, newWork) {
    //   state.data.push(newWork);
    // },
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
    // REMOVE_WORK(state, workIdToRemove) {
    //   state.data = state.data.filter(work => work.id !== workIdToRemove);
    // }
  },
  actions: {
    // async add({ commit }, newWork) {
    //   const formData = new FormData();

    //   Object.keys(newWork).forEach(item => {
    //     formData.append(item, newWork[item]);
    //   });

    //   // for (let entry of formData.entries()) { // вывод в консоль данных объекта formData
    //   //   console.log(entry);
    //   // }

    //   try {
    //     const { data } = await this.$axios.post('/works', formData);
    //     commit("ADD_WORK", data);
    //   } catch (error) {
    //     throw new Error("Произошла ошибка")
    //   }
    // },
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
        const { data } = await this.$axios.get('/reviews/{user_id}'); // с сервера в data возвращается массив объектов с отзывами
        commit("SET_REVIEWS", data);
      } catch (error) {
        throw new Error("Произошла ошибка")
      }
    },
    // async remove({ commit }, workIdToRemove) {
    //   try {
    //     const { data } = await this.$axios.delete(`/works/${workIdToRemove}`);
    //     commit("REMOVE_WORK", workIdToRemove)
    //   } catch (error) {
    //     throw new Error("Произошла ошибка");
    //   }
    // },
  }
}