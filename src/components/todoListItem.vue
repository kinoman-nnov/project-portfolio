<template lang="pug">
.todo-item(:class="{ checked: todo.checked }")
  label.label
    .input-block
      input.input(
        type="checkbox",
        @change="checkTodoAsCompleted",
        :checked="todo.checked"
      )
    .title {{ todo.name }}
  .button 
    router-link.view(tag="button", :to="`/view/${todo.name}`")
      svg(viewBox="0 0 59.414 59.414", xmlns="http://www.w3.org/2000/svg")
        polygon(
          points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707"
        )
  .button
    button.remove(type="button", @click="removeExistedTodo")
      svg(viewBox="0 0 24 24", xmlns="http://www.w3.org/2000/svg")
        path(
          d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
        )
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    todo: Object,
  },
  methods: {
    ...mapMutations(["removeTodo", "checkTodo"]),
    removeExistedTodo() {
      this.removeTodo(this.todo.id);
    },

    checkTodoAsCompleted(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked,
      };

      this.checkTodo(todoItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;

  &:hover {
    .remove {
      visibility: visible;
    }

    .view {
      visibility: visible;
    }
  }
}

.checked {
  color: rgb(219, 219, 219);
  text-decoration: line-through;
}

.label {
  display: flex;
  align-items: center;
  flex: 1;
}

.input-block {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  padding: 15px 0;
  display: block;
  line-height: 1.2;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: transparent;
  border: none;
}

.view {
  visibility: hidden;
  cursor: pointer;
}

.remove {
  fill: firebrick;
  cursor: pointer;
  visibility: hidden;
}
</style>