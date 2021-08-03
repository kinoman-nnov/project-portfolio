const todos = {
  state: { // состояние приложения, т. е. данные внутри приложения (работает с computed)
    todos: [],
    filter: "all",
    currentState: {
      checkedAll: false,
      clearButtonActive: false,
      todosItemsLeft: []
    }
  },
  mutations: { // описывает методы, которые изменяют данные приложения (когда необходимо внести данные в хранилище) (работает с methods)
    addTodo(state, todo) {
      state.todos.push(todo)
    },

    removeTodo(state, todoId) {
      state.todos = state.todos.filter(item => {
        return item.id !== todoId;
      });
    },

    checkTodo(state, todo) {
      state.todos = state.todos.map(item => {
        if (item.id === todo.id) {
          return todo;
        } else {return item;}
      });
    },

    filterTodos(state, filter) {
      state.filter = filter;
    },

    selectedALLTodos(state, currentStateBool) {
      state.currentState.checkedAll = currentStateBool;
      state.todos.map(item => {
        if (currentStateBool) { 
          if (!item.checked) { 
            return (item.checked = currentStateBool); 
          }
        }
        else {
           if (item.checked) { 
            return (item.checked = currentStateBool); 
          }
        }
      });
    },

    removeCompletedTodo(state, completedTodo) {
      state.todos = completedTodo.filter(item => {
        if (item.checked === false) { 
          return item;
        }
      });
    },

    testMutation(state, payload) {
      console.log('testMutation',payload);
    }
  },

  getters: { // возвращает данные из общих данных приложения (когда необходимо получить данные из хранилища) (работает с computed)
    todoById: (state) => (id) => {
      return state.todos.filter(item => item.id === id);
    }
  },
  actions: { // методы описывают, что с данными проиходит (загрузка данных, для выполнения ajax-запросов) (работает с methods)
    fetchItems(store) {
      store.commit('testMutation', 103);
      store.dispatch('anotherAction', 49)
      console.log(store);
    },
    anotherAction(store, payload) {
      console.log('another action', payload);
    }
  }
}

export default todos;