import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    game: {
      hits: [],
      level: 0,
      started: false,
      state: "waiting", // waiting, ready, listening, gameover
      difficulty: "easy",
      currentSequence: [],
      sequenceListener: undefined,
      currentGame: [],
      timer: 1500,
      timerId: null,
      difficulty: ["Легкий", "Средний", "Сложный"],
      selectDifficulty: "Легкий",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
