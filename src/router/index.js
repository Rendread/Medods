import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Game from "../views/Game.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Game,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
