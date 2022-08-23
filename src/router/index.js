import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/views/LoginPage";
import GamePage from "@/views/GamePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
