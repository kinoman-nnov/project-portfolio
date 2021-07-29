<template lang="pug">
  div
    div.todo
      todo-input(
        @addTodo="addTodo"
      )
      todo-list(
        v-if="todos.length > 0"
        :todos="filteredTodos"
        :currentState="currentStateTodos"
        @removeTodo="removeTodo"
        @checkTodo="checkTodo"
        @filterTodos="filterTodos"
        @selectedALLTodos="selectedALLTodos"
      )
    pre {{todos}} {{filter}}
</template>

<script>
import todoInput from './todoInput.vue'
import todoList from './todoList.vue'

export default {
  data() {
    return {
      todos: [],
      filter: "all",
      currentState: {
        checked: false
      }
    }
  },
  components: {
    todoInput,
    todoList
  },
  computed: {
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
      for (const todo of this.todos) {
        if (todo.checked === true) {
          continue; 
        }
        else {
          return this.currentState = false;
        }
      } return this.currentState = true;
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo)
    },

    removeTodo(todoId) {
      this.todos = this.todos.filter(item => {
        return item.id !== todoId;
      });
    },

    checkTodo(todo) {
      this.todos = this.todos.map(item => {
        if (item.id === todo.id) {
          return todo;
        } else {return item;}
      });
    },

    filterTodos(filter) {
      this.filter = filter;
    },

    selectedALLTodos(currentState) { 
      this.currentState = currentState;
      this.todos.map(item => {
        if (currentState) { 
          if (item.checked === false) { 
            return (item.checked = currentState); 
          }
        }
        else {
           if (item.checked) { 
            return (item.checked = currentState); 
          }
        }
      });
    }
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
