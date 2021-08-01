<template lang="pug">
  .todo-list
    todo-list-button(
      @selectedALLTodos="selectedALLTodos"
      :currentState="currentState"
    )
    .content
      ul.list
        li.item(
          v-for="todo in todos"
        )
          todo-list-item(
            :todo="todo"
            @removeTodo="removeTodo"
            @checkTodo="checkTodo"
          )             
    .footer
      .footer-content
        .counter {{currentState.todosItemsLeft.length}} items left
        .filter
          todo-list-filter(
            @filterTodos="filterTodos"
          )
        .clear-completed-button
          button(
            type="button"
            :class="{active: currentState.clearButtonActive}"
            @click="removeCompletedTodo"
          ) Clear completed
</template>

<script>
import todoListButton from './todoListButton.vue'
import todoListItem from './todoListItem.vue'
import todoListFilter from './todoListFilter.vue'
 
export default {
  props: {
    todos: Array,
    currentState: Object
  },
  components: {
    todoListButton,
    todoListFilter,
    todoListItem
  },
  methods: {
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId);
    },

    checkTodo(todo) {
      this.$emit('checkTodo', todo);
    },

    filterTodos(filter) {
      this.$emit('filterTodos', filter);
    },

    selectedALLTodos(current) {
      this.$emit('selectedALLTodos', current)
    },

    removeCompletedTodo() {
      this.$emit('removeCompletedTodo', this.todos);
    }
  }
}
</script>


<style lang="scss" scoped>

  .todo-list {
    position: relative;
  }

  .list {
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .item {
    border-bottom: 1px solid #ededed;
      &:last-child {
        border-bottom: none;
      }
  }

  .footer {
    color: #777;
    padding: 10px 15px;
    text-align: center;
    position: relative;
    font-size: 14px;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
  }

  .footer-content {
    display: flex;
    align-items: center;
    position: relative;
  }

  .filter {
    width: 393px;
  }

  button {
    border: none;
    cursor: pointer;    
    outline: none;
    background: transparent;
    color: inherit;

    display: none;

    &.active {
      display: flex;
    }
  }
</style>