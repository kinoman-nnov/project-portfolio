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
    pre {{todos}} {{currentStateTodos}}
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
        checkedAll: false,
        todosChecked: []
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
      this.currentState.todosChecked = this.todos.filter(item => {
        if (item.checked === false) { 
          return item;
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

    selectedALLTodos(currentStateBool) {
      this.currentState.checkedAll = currentStateBool;
      this.todos.map(item => {
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
