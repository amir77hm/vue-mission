import { createStore } from "vuex";
import setting, { SettingState } from "./Modules/setting";
import createPersistedState from "vuex-persistedstate";

export interface RootState {
  setting: SettingState;
}

export default createStore({
  actions: {
    async initApp({ dispatch }) {
      await dispatch("setting/initApp");
    },
  },
  modules: {
    setting,
  },
  plugins: [
    createPersistedState({
      key: "vuex_setting",
      paths: ["setting"],
    }),
  ],
});
