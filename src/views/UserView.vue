<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-3xl mx-auto">
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          User Search
        </h1>

        <div class="mb-6">
          <label
            for="userId"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Enter User ID</label
          >
          <div class="flex gap-4">
            <input
              type="text"
              id="userId"
              v-model="userId"
              class="flex-1 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              placeholder="Enter user ID (1-10)"
            />
            <button
              @click="fetchUser"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Search
            </button>
          </div>
        </div>

        <div v-if="loading" class="text-center py-4">
          <div
            class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 dark:border-indigo-400 mx-auto"
          ></div>
        </div>

        <div
          v-else-if="error"
          class="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded relative"
        >
          {{ error }}
        </div>

        <div
          v-else-if="user"
          class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6"
        >
          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-shrink-0">
              <img
                :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`"
                :alt="user.name"
                class="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>

            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ user.name }}
              </h2>
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {{ user.company.name }}
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-3">
                  <div class="flex items-center text-sm">
                    <svg
                      class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="text-gray-900 dark:text-gray-100">{{
                      user.email
                    }}</span>
                  </div>

                  <div class="flex items-center text-sm">
                    <svg
                      class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span class="text-gray-900 dark:text-gray-100">{{
                      user.phone
                    }}</span>
                  </div>

                  <div class="flex items-center text-sm">
                    <svg
                      class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <span class="text-gray-900 dark:text-gray-100">{{
                      user.website
                    }}</span>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="flex items-start text-sm">
                    <svg
                      class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-900 dark:text-gray-100">
                        {{ user.address.street }}, {{ user.address.suite }}
                      </div>
                      <div class="text-gray-900 dark:text-gray-100">
                        {{ user.address.city }}, {{ user.address.zipcode }}
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center text-sm">
                    <svg
                      class="h-5 w-5 text-gray-400 dark:text-gray-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-900 dark:text-gray-100">
                        {{ user.company.name }}
                      </div>
                      <div class="text-gray-500 dark:text-gray-400">
                        {{ user.company.catchPhrase }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref } from "vue";
import store from "@/store";

export default defineComponent({
  name: "UserView",
  setup() {
    const userId = ref("");
    const user = computed(() => store.getters["user/currentUser"]);
    const loading: Ref<boolean> = computed(() => store.state.user.loading);
    const error: Ref<string | null> = computed(() => store.state.user.error);

    const fetchUser = async () => {
      if (!userId.value) {
        return store.dispatch("user/setError", "User ID is required");
      }
      store.dispatch("user/fetchUser", userId.value);
    };

    return {
      userId,
      user,
      loading,
      error,
      fetchUser,
    };
  },
});
</script>
