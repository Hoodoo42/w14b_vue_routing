<template>
  <div>
    <router-link to="/">Login</router-link>
    <game-button></game-button>
  </div>
</template>

<script>
import GameButton from "@/components/GameButton.vue";

export default {
  components: {
    GameButton,
  },
};
</script>

<style lang="scss" scoped>
</style>