import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "@/constants";
import Home from "../pages/Home.vue";
import Coctail from "../pages/Coctail.vue";
import CoctailRandom from "../pages/CoctailRandom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: Coctail
    },
    {
      path: ROUTES_PATHS.COCKTAIL_RANDOM,
      name: ROUTES_PATHS.COCKTAIL_RANDOM,
      component: CoctailRandom
    }    
  ]
});

export default router
