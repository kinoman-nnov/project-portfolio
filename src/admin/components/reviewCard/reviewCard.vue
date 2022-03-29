<template>
  <card>
    <div class="review-wrapper">
      <user
        title="User Name"
      />
      <div class="data">
        <div class="title">{{ work.title }}</div>
        <div class="text">
          <p>{{ work.description }}</p>
        </div>
        <a :href="work.link" class="link link-workCard">{{ work.link }}</a>
        <div class="btns">
          <icon symbol="pencil" title="Править" @click="editWork"> </icon>
          <icon symbol="trash" title="Удалить" @click="$emit('remove-work', work.id)"> </icon>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import card from "../card";
import user from "../user";
import icon from "../icon";

export default {
  components: {
    card, user, icon
  }
};

</script>

<style lang="postcss" scoped src="./reviewCard.pcss"></style>
