import { createStore } from "vuex";
import setting, { SettingState } from "./Modules/setting";
import ecommerce, { EcommerceState } from "./Modules/ecommerce";
import createPersistedState from "vuex-persistedstate";

export interface RootState {
  setting: SettingState;
  ecommerce: EcommerceState;
}

export default createStore({
  actions: {
    async initApp({ dispatch }) {
      await dispatch("setting/initApp");
    },
  },
  modules: {
    setting,
    ecommerce,
  },
  plugins: [
    createPersistedState({
      key: "vuex_store",
      paths: ["setting", "ecommerce"],
      storage: localStorage,
    }),
  ],
});
