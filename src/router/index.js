import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Medods/game",
    name: "Game",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Game,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;