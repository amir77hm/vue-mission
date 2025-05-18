import type { Module } from "vuex";
import { RootState, MarketState } from "@/types/store";

const FailureThreshold = 2;
const DownTimeThreshold = 30000;

const marketModule: Module<MarketState, RootState> = {
  namespaced: true,

  state: (): MarketState => ({
    isOpen: false,
    failureCount: 0,
    lastFailureTime: null,
  }),

  getters: {
    getIsOpen: (state) => state.isOpen,
  },

  mutations: {
    CHECK_CIRCUIT_BREAKER(state): void {
      if (state.failureCount >= FailureThreshold) {
        state.isOpen = true;
        state.lastFailureTime = Date.now();
      }
    },
    RESET_CIRCUIT_BREAKER(state): void {
      if (
        state.lastFailureTime &&
        DownTimeThreshold >= state.lastFailureTime - Date.now()
      ) {
        state.failureCount = 0;
        state.lastFailureTime = null;
        state.isOpen = false;
      }
    },
    INCREMENT_FAILURE_COUNT(state): void {
      state.failureCount++;
    },
  },

  actions: {
    checkCircuitBreaker({ commit }): void {
      commit("CHECK_CIRCUIT_BREAKER");
    },
    resetCircuitBreaker({ commit }): void {
      commit("RESET_CIRCUIT_BREAKER");
    },
    incrementFailureCount({ commit }): void {
      commit("INCREMENT_FAILURE_COUNT");
    },
  },
};

export default marketModule;
