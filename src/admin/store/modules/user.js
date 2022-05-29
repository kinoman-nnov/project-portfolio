export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => (state.user = user),
    CLEAR_USER: state => (state.user = {})
  },
  getters: { // если объект user пустой, значит пользователь залогинен не был
    userIsLoggedIn: state => {
      const userObj = state.user;
      // проверка объекта на пустоту
      const userObjIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;
      
      return userObjIsEmpty === false; // возвращает false, если объект пустой, и true если нет
    }
  },
  actions: {
    logout({ commit }) {
      localStorage.removeItem("token");
      location.reload(); // перезагрузка страницы, чтобы отправить пустой токен
    },
    login({ commit }, user) {
      commit("SET_USER", user)
    }
  }
}