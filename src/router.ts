import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Game.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "Game",
      component: Home
    },
    {
      path: "/how-to-play",
      name: "Instructions",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Instructions.vue")
    }
  ]
});
