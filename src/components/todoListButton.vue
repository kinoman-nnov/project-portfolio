<template lang="pug">
  .todo-list-button
    button(
      type="button"
      @click="selectedALLTodos"
      :class="{active: currentState}"
    ) v
</template>

<script>
export default {
  data() {
    return {
      currentState: false
    }
  },
  methods: {
    selectedALLTodos() {
      this.$emit('selectedAll', this.currentState = true);
    }
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
    color: rgba(161, 150, 150, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.158);
    border-radius: 3px;

    &.active {
      color: rgba(0, 0, 0, 0.8);
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