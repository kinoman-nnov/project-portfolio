<template lang="pug">
  .todo-list
    todo-list-button(
      :currentState="currentState"
    )
    .content
      ul.list
        li.item(
          v-for="todo in todos"
        )
          todo-list-item(
            :todo="todo"
          )             
    .footer
      .footer-content
        .counter {{currentState.todosItemsLeft.length}} items left
        .filter
          todo-list-filter
        .clear-completed-button
          button(
            type="button"
            :class="{active: currentState.clearButtonActive}"
            @click="removeCompletedAllTodo"
          ) Clear completed
</template>

<script>
import { mapMutations } from 'vuex';

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
    ...mapMutations(['removeCompletedTodo']),
    removeCompletedAllTodo() {
      this.removeCompletedTodo(this.todos);
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