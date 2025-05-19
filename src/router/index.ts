import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SettingView from "../views/SettingView.vue";
import ProductsView from "../views/ProductsView.vue";
import BasketView from "../views/BasketView.vue";
import MarketView from "../views/MarketView.vue";
import AdminView from "../views/AdminView.vue";
import UserView from "../views/UserView.vue";

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
  {
    path: "/market",
    name: "market",
    component: MarketView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
