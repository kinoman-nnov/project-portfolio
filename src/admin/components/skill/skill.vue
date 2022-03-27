<template>
  <div class="skill-component" v-if="currentSkill.editmode === false">
    <div class="title">{{ skill.title }}</div>
    <div class="percent">{{ skill.percent }}</div>
    <div class="buttons">
      <icon
        symbol="pencil"
        class="btn"
        @click="currentSkill.editmode = true"
        grayscale
      />
      <icon
        symbol="trash"
        class="btn"
        @click="$emit('remove', currentSkill)"
        grayscale
      />
    </div>
  </div>
  <div class="skill-component" v-else>
    <div class="title">
      <app-input
        noSidePaddings
        :errorMessage="validation.firstError('currentSkill.title')"
        v-model="currentSkill.title"
      />
    </div>
    <div class="percent">
      <app-input
        :errorMessage="validation.firstError('currentSkill.percent')"
        v-model="currentSkill.percent"
        type="number"
        min="0"
        max="100"
        maxlength="3"
      />
    </div>
    <div class="buttons">
      <icon symbol="tick" class="btn" @click="handleClick" />
      <icon symbol="cross" class="btn" @click="currentSkill.editmode = false" />
    </div>
  </div>
</template>

<script>
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
import input from "../input";
import icon from "../icon";

export default {
  mixin: [ValidatorMixin],
  validators: {
    "currentSkill.title": (value) => {
      return Validator.value(value).required("Не может быть пустым");
    },
    "currentSkill.percent": (value) => {
      return Validator.value(value)
        .integer("Должен быть числом")
        .between(0, 100, "Некорректное значение")
        .required("Не может быть пустым");
    },
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      title: this.skill.title,
      percent: this.skill.percent,
      currentSkill: {
        id: this.skill.id,
        title: this.skill.title,
        percent: this.skill.percent,
        category: this.skill.category,
        editmode: false,
      },
    };
  },
  methods: {
    async handleClick() {
      if ((await this.$validate()) === false) return;
      if (
        this.skill.title.trim() === this.currentSkill.title.trim() &&
        this.skill.percent === Number(this.currentSkill.percent)
      ) {
        this.currentSkill.editmode = false;
      } else {
        this.$emit("approve", this.currentSkill);
      }
    },
  },
  components: {
    icon,
    appInput: input,
  },
};
</script>

<style lang="postcss" src="./skill.pcss" scoped></style>

