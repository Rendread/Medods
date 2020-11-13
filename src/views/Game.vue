<template>
  <div class="game__content">
    <SimonTheGame></SimonTheGame>
  </div>
</template>

<script>
import SimonTheGame from "@/components/game/SimonTheGame";

export default {
  components: { SimonTheGame },
};
</script>

<style lang="scss" scoped>
.game__content {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
@media (max-width: 767px) {
  .game__content {
    margin-top: 70px;
  }
}
</style>
