import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Runs from "@/views/Runs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/runs",
    name: "Runs",
    component: Runs,
  },
  {
    path: "/scratch",
    name: "Scratch",
    component: () =>
      import(/* webpackChunkName: "scratch" */ "@/views/Scratch.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
