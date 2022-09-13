<template>
  <div class="header-component">
    <headline
      title="Панель администрирования"      
    />
    <navigation />
  </div>
</template>

<script>
import headline from "../headline";
import navigation from "../navigation";

export default {
  components: { headline, navigation },
};
</script>