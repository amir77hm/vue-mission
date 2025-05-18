import type { Module } from "vuex";
import type { Theme, FontSize } from "@/types/setting";
import { RootState, SettingState } from "@/types/store";

const settingModule: Module<SettingState, RootState> = {
  namespaced: true,

  state: (): SettingState => ({
    theme: "dark",
    fontSize: "small",
  }),

  getters: {
    theme: (state): Theme => state.theme,
    fontSize: (state): FontSize => state.fontSize,
  },

  mutations: {
    SET_THEME(state, value: Theme): void {
      document.documentElement.classList.remove(state.theme);
      state.theme = value;
      document.documentElement.classList.add(value);
    },
    SET_FONT_SIZE(state, value: FontSize): void {
      const fontSizes = {
        small: "text-small",
        medium: "text-medium",
        large: "text-large",
      };
      document.documentElement.classList.remove(...Object.values(fontSizes));
      document.documentElement.classList.add(fontSizes[value]);

      state.fontSize = value;
    },
  },

  actions: {
    setTheme({ commit }, payload: Theme): void {
      commit("SET_THEME", payload);
    },
    setFontSize({ commit }, payload: FontSize): void {
      commit("SET_FONT_SIZE", payload);
    },

    initApp({ state, dispatch }) {
      const theme = state.theme;
      const fontSize = state.fontSize;

      if (theme === "dark" || theme === "light") {
        // Re-apply the theme class to <html>
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
      } else {
        // Default theme fallback
        const defaultTheme: Theme = "dark";
        dispatch("setTheme", defaultTheme);
      }

      if (
        fontSize === "small" ||
        fontSize === "medium" ||
        fontSize === "large"
      ) {
        dispatch("setFontSize", fontSize);
      }
    },
  },
};

export default settingModule;
