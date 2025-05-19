import { createStore } from "vuex";
import setting from "./Modules/setting";
import ecommerce from "./Modules/ecommerce";
import market from "./Modules/market";
import user from "./Modules/user";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  actions: {
    async initApp({ dispatch }) {
      await dispatch("setting/initApp");
    },
  },
  modules: {
    setting,
    ecommerce,
    market,
    user,
  },
  plugins: [
    createPersistedState({
      key: "vuex_store",
      paths: ["setting", "ecommerce"],
      storage: localStorage,
    }),
  ],
});
