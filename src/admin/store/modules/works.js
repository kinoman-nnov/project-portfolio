export default {
  namespaced: true,
  state: {
    data: [],    
  },
  mutations: {
    ADD_WORK: (state, work) => console.log(work),
  },
  actions: {
    async add({ commit }, work) {
      try {
        const { data } = await this.$axios.post('/works', { work });
        console.log(data);
        commit("ADD_WORK", data);
      } catch (error) {
        throw new Error("Произошла ошибка")
      }
    },
  }
}