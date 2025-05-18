import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingView from "../views/SettingView.vue";
import ProductsView from "../views/ProductsView.vue";
import BasketView from "../views/BasketView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
  },
  {
    path: "/ecommerce/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/ecommerce/basket",
    name: "basket",
    component: BasketView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
