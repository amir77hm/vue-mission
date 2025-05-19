import type { Module } from "vuex";
import type { Theme, FontSize } from "@/types/setting";
import { RootState, UserState, User } from "@/types/store";
import Base from "@/services/Base";

const settingModule: Module<UserState, RootState> = {
  namespaced: true,

  state: (): UserState => ({
    currentUser: null,
    cachedUsers: [],
    loading: false,
    error: null,
    abortController: null,
  }),

  getters: {
    currentUser: (state) => state.currentUser,
    cachedUsers: (state) => state.cachedUsers,
    getUserFromCache: (state) => (id: number) => {
      return state.cachedUsers.find((user) => user.id === +id);
    },
  },

  mutations: {
    SET_CURRENT_USER(state, user: User) {
      state.currentUser = user;
    },
    ADD_USER_TO_CACHE(state, user: User) {
      state.cachedUsers = [...state.cachedUsers, user];
    },
    SET_LOADING(state, loading: boolean) {
      state.loading = loading;
    },
    SET_ERROR(state, error: string) {
      state.error = error;
    },
    SET_ABORT_CONTROLLER(state, controller: AbortController) {
      state.abortController = controller;
    },
    RESET_ABORT_CONTROLLER(state) {
      state.abortController = null;
    },
  },

  actions: {
    setError({ commit }, error: string) {
      commit("SET_ERROR", error);
    },
    fetchUser({ commit, state, getters }, id: number) {
      const existingUser = getters["getUserFromCache"](id);
      if (existingUser) {
        commit("SET_CURRENT_USER", existingUser);
        return;
      }

      if (state.abortController) {
        state.abortController.abort();
      }

      const controller = new AbortController();
      const signal = controller.signal;

      commit("SET_ABORT_CONTROLLER", controller);

      commit("SET_LOADING", true);
      commit("SET_ERROR", null);

      Base.get(`users/${id}`, { signal })
        .then((response) => {
          commit("SET_CURRENT_USER", response.data);
          commit("ADD_USER_TO_CACHE", response.data);
        })
        .catch((error) => {
          commit("SET_ERROR", error.message);
        })
        .finally(() => {
          commit("SET_LOADING", false);
          commit("RESET_ABORT_CONTROLLER");
        });
    },
  },
};

export default settingModule;
