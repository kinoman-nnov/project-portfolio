<template lang="pug">
  div
    div.todo
      todo-input(
        @addTodo="addTodo"
      )
      todo-list(
        v-if="todos.length > 0"
        :todos="todos"
        @removeTodo="removeTodo"
        @checkTodo="checkTodo"
      )
    pre {{todos}}
</template>

<script>
import todoInput from './todoInput.vue'
import todoList from './todoList.vue'

export default {
  data() {
    return {
      todos: []
    }
  },
  components: {
    todoInput,
    todoList
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
