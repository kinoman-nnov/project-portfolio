<template lang="pug">
  .todo-list-button
    button(
      type="button"
      @click="selectedAllExistedTodos"
      :class="{active: currentState.checkedAll}"
    ) v
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    currentState: Object
  },
  methods: {
    ...mapMutations(['selectedALLTodos']),
    selectedAllExistedTodos() { // пользовательское событие Boolean
      let currentStateBool = this.currentState.checkedAll;
      this.selectedALLTodos(!currentStateBool);
    },
  }
}
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

    &.active {
      color: rgb(0, 0, 0);
    }
  }

  .todo-list-button {      
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 65px;
    position: absolute;
    left: 0;
    bottom: 100%;
  }
</style>