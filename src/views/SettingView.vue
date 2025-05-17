<template>
  <div class="p-8 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Settings</h1>
    <div class="mt-8">
      <button
        @click="toggleTheme"
        class="flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:scale-105"
        :class="[
          theme === 'dark'
            ? 'bg-gray-800 text-white border-gray-600'
            : 'bg-white text-gray-800 border-gray-200',
        ]"
      >
        <span class="text-xl">{{ theme ? "🌙" : "☀️" }}</span>
        <span>{{ theme ? "Dark Mode" : "Light Mode" }}</span>
      </button>
    </div>

    <div class="mt-8">
      <label for="navbar-style" class="block text-sm font-medium mb-2"
        >Font Size</label
      >
      <select
        id="navbar-style"
        v-model="fontSize"
        class="w-full px-4 py-2 rounded-lg border-2 transition-all duration-300"
        :class="[
          theme === 'dark'
            ? 'bg-gray-800 text-white border-gray-600'
            : 'bg-white text-gray-800 border-gray-200',
        ]"
      >
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import type { FontSize } from "@/types/setting";
const store = useStore();

const fontSize = computed({
  get: () => store.getters["setting/fontSize"],
  set: (value: FontSize) => store.dispatch("setting/setFontSize", value),
});

const theme = computed(() => store.getters["setting/theme"]);

const toggleTheme = (): void => {
  store.dispatch("setting/setTheme", theme.value === "dark" ? "light" : "dark");
};
</script>
