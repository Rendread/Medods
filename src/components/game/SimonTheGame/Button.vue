<template>
  <button
    ref="btn"
    :style="`background-color:${color}`"
    @click="click($event)"
    :data-button="textButton"
    :class="`button${textButton}`"
  >
    {{ textButton }}
  </button>
</template>

<script>
export default {
  name: "SimonButton",
  props: {
    textButton: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    sound: {
      type: String,
      required: true,
    },
  },
  methods: {
    clearTimeout() {
      clearTimeout(this.$store.state.game.timerId);
    },
    setTimeout() {
      this.$store.state.game.selectDifficulty == "Легкий"
        ? (this.$store.state.game.timer = 1500)
        : 0;
      this.$store.state.game.selectDifficulty == "Средний"
        ? (this.$store.state.game.timer = 1000)
        : 0;
      this.$store.state.game.selectDifficulty == "Сложный"
        ? (this.$store.state.game.timer = 400)
        : 0;
      this.$store.state.game.timerId = setTimeout(
        () => window.$SimonTheGame.gameOver(),
        this.$store.state.game.timer,
      );
    },
    click($event) {
      const turn = this.$store.state.game.state;
      if (turn != "listening" && (!$event || $event.isTrusted)) {
        return;
      }

      const $btn = this.$refs.btn;
      const key = $btn?.dataset?.button;
      $btn.classList.add("click");
      setTimeout(() => {
        $btn.classList.remove("click");
      }, 200);
      this.playSound(require(`@/assets/sounds/${this.sound}`));
      if ($event.isTrusted) {
        this.clearTimeout(this.$store.state.game.timerId);
        this.setTimeout();
        this.checkSequence(key);
      }
    },
    checkSequence(key) {
      if (window.$SimonTheGame.getState() === "listening") {
        this.$store.state.game.hits.push(key);
        const keymap = { 1: 0, 2: 1, 3: 2, 4: 3 };
        const keyindex = keymap[key.toLowerCase()];
        const expected = window.$SimonTheGame.shiftSequence();

        if (expected == keyindex) {
          this.clearTimeout(this.$store.state.game.timerId);
          if (!!window.$SimonTheGame.sequence().length) {
            this.setTimeout();
          }
          if (!window.$SimonTheGame.sequence().length) {
            this.clearTimeout(this.$store.state.game.timerId);
            setTimeout(() => {
              if (this.$store.state.game.state == "gameover") return;
              window.$SimonTheGame.setState("waiting");
              window.$SimonTheGame.levelUp();
            }, 1000);
          }
        } else {
          window.$SimonTheGame.gameOver();
        }
      }
    },
    playSound(sound) {
      const audio = new Audio(sound);
      audio.play();
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 50%;
  border: 0px;
  opacity: 0.8;
  &.click {
    opacity: 1;
    pointer-events: none;
    user-select: none;
    &:before {
      outline: none;
      pointer-events: none;
    }
  }
  &:active {
    opacity: 80%;
    outline: none;
  }
  &:focus {
    outline: none;
  }

  &[data-button="1"] {
    border-radius: 50% 0% 0% 0%;
  }
  &[data-button="2"] {
    border-radius: 0% 50% 0% 0%;
  }
  &[data-button="3"] {
    border-radius: 0% 0% 0% 50%;
  }
  &[data-button="4"] {
    border-radius: 0% 0% 50% 0%;
  }
}
</style>
