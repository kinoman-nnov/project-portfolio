import skillAddLine from "./skillAddLine"
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

export default {
  title: "skillAddLine",
  components: { skillAddLine }
}

export const defaultView = () => ({
  components: { skillAddLine },
  template: `
    <skill-add-line /> 
  `
})