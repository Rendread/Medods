<template>
  <div>
    <div :class="`simon-game ${state}`" value="">
      <GLButton :textButton="`1`" :color="`#FF0000`" :sound="'1.mp3'"></GLButton>
      <GLButton :textButton="`2`" :color="'#008000'" :sound="'2.mp3'"></GLButton>
      <GLButton :textButton="`3`" :color="'#0000FF'" :sound="'3.mp3'"></GLButton>
      <GLButton :textButton="`4`" :color="'#008B8B'" :sound="'4.mp3'"></GLButton>
    </div>
    <button @click="start()" type="button">Начать игру</button>
    <h1 v-if="this.$store.state.game.state == 'gameover'">Game Over</h1>
    <p>Уровень сложности</p>
    <select v-model="selectDifficulty" v-on:change="changeDiff(selectDifficulty)">
      <option v-for="(item, key) in difficultys" v-bind:key="key">{{ item }}</option>
    </select>
  </div>
</template>

<script>
import GLButton from "@/components/game/SimonTheGame/Button";
export default {
  data() {
    return {
      difficultys: this.$store.state.game.difficulty,
      selectDifficulty: this.$store.state.game.selectDifficulty,
    };
  },

  components: {
    GLButton,
  },
  methods: {
    play(sequence = []) {
      this.setState("play");
      //console.log("waiting");
      sequence.forEach((n, i) => {
        setTimeout(() => {
          document.querySelectorAll(`[data-button]`)[n].click();
          if (i == sequence.length - 1) {
            this.setState("listening");
          }
        }, 800 * i);
        //console.log(this.currentSequence + " 3turn this.currentSequence");
        //console.log(this.currentGame + " 3turn this.currentGame");
      });
    },
    start() {
      setTimeout(() => {
        this.restartGame();
      }, 500);
    },
    restartGame() {
      if (!this.$store.state.game.started) {
        this.started = true;
        this.restart();
      }
    },
    restart() {
      this.setState("waiting");
      this.$store.state.game.started = true;
      this.$store.state.game.hits = [];
      this.$store.state.game.level = 0;
      this.$store.state.game.elapsedTime = 0;
      this.$store.state.game.currentSequence = [];
      this.$store.state.game.currentGame = [];
      this.$store.state.game.sequenceListener = undefined;
      setTimeout(() => {
        window.$SimonTheGame.levelUp();
      }, 500);
    },
    levelUp() {
      this.level++;

      for (let i = this.sequenceGame().length; i < this.level; i++) {
        this.currentGame.push(this.randomNumber(0, 3));
      }
      console.log(`${this.currentGame}  + " this.currentGame"`);
      this.currentSequence = this.currentSequence.concat(this.currentGame);

      this.play(this.currentSequence);
    },
    gameOver() {
      this.setState("gameover");
      this.$store.state.game.started = false;
    },
    changeDiff(selectDifficulty) {
      this.$store.state.game.selectDifficulty = selectDifficulty;
    },
    setState(state) {
      this.$store.state.game.state = state;
    },
    getState() {
      return this.$store.state.game.state;
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    sequence() {
      return this.currentSequence;
    },
    sequenceGame() {
      return this.currentGame;
    },
    shiftSequence() {
      return this.currentSequence.shift();
    },
    getLevel() {
      return this.level;
    },
  },
  computed: {
    level: {
      get() {
        return this.$store.state.game.level;
      },
      set(value) {
        this.$store.state.game.level = value;
      },
    },
    state: {
      get() {
        return this.$store.state.game.state;
      },
      set(value) {
        this.$store.state.game.state = value;
      },
    },
    currentSequence: {
      get() {
        return this.$store.state.game.currentSequence;
      },
      set(value) {
        this.$store.state.game.currentSequence = value;
      },
    },
    currentGame: {
      get() {
        return this.$store.state.game.currentGame;
      },
      set(value) {
        this.$store.state.game.currentGame = value;
      },
    },
  },
  mounted() {
    window.$SimonTheGame = this;
  },
};
</script>

<style lang="scss" scoped>
.simon-game {
  margin: 40px 40px;
  height: 400px;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 50%;
  border: 0px;
  &.waiting {
    pointer-events: none;
  }
}
@media (max-width: 767px) {
  .simon-game {
    height: 300px;
    width: 300px;
  }
}
@media (max-width: 424px) {
  .simon-game {
    height: 200px;
    width: 200px;
  }
}
</style>
