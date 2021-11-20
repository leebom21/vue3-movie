import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  //Hash : 특정페이지에서 페이지를 찾을수없다는 것을 나타내기위해서 사용
  //https://google.com/#/search
  history: createWebHashHistory(),
  routes,
});

export default router;
