import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "./scenes/Home.vue";
import Gif from "./scenes/Gif.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/gif", component: Gif },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
