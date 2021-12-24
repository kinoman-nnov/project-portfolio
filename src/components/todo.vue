<template lang="pug">
  div.todo
    todo-input()
    todo-list(
      v-if="todos.length > 0"
      :todos="filteredTodos"
      :currentState="currentStateTodos"
    )
</template>

<script>
import todoInput from './todoInput.vue'
import todoList from './todoList.vue'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    todoInput,
    todoList
  },
  mounted() {
    // setTimeout(() => {
    //   console.log(this.todoById(2)); // возвращает задание с id: 2 по setTimeout
    // }, 3000);

    this.fetchItems();
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter,
      currentState: state => state.todos.currentState
    }),
    ...mapGetters(['todoById']),

    filteredTodos() { 
      switch(this.filter) {
        case "all" :
          return this.todos;
        case "active" :
          return this.todos.filter(item => {
            if (!item.checked) {
              return item
            }
          });
        case "completed" :
          return this.todos.filter(item => {
            if (item.checked) {
              return item
            }
          });
      }
    },

    currentStateTodos() {
      this.currentState.todosItemsLeft = this.todos.filter(item => {
        if (item.checked === false) { 
          return item;
        }
      });

      this.currentState.clearButtonActive = this.todos.some(item => {
        if (item.checked === true) {
          return item.checked;
        }
      });

      for (const todo of this.todos) {
        if (todo.checked === true) {
          continue; 
        }
        else {
          this.currentState.checkedAll = false;
          return this.currentState;
        }
      } 
      this.currentState.checkedAll = true;
      return this.currentState;
    }
  },
  methods: {
    ...mapActions(['fetchItems'])
  }
}
</script>

<style lang="scss" scoped>
  .todo {
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
</style>
