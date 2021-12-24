<template lang="pug">
.todo-list-button
  button.round_button(type="button", @click="selectedAllExistedTodos")
    svg(
      :class="{ active: currentState.checkedAll }",
      viewBox="0 0 24 24",
      xmlns="http://www.w3.org/2000/svg"
    )
      path(
        d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z"
      )
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    currentState: Object,
  },
  methods: {
    ...mapMutations(["selectedALLTodos"]),
    selectedAllExistedTodos() {
      // пользовательское событие Boolean
      let currentStateBool = this.currentState.checkedAll;
      this.selectedALLTodos(!currentStateBool);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  font-weight: 100;
  font-size: 24px;
  color: rgba(161, 150, 150, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.158);
  border-radius: 3px;
}

.todo-list-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 100%;
}

.round_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

svg {
  width: 24px;
  height: 24px;
  fill: rgba(161, 150, 150, 0.4);
  &.active {
    fill: #1e1f24;
  }
}
</style>