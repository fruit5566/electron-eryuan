import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "/",
  routes
});

export default router;
