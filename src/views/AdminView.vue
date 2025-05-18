<template>
  <DynamicScroller :items="items" :min-item-size="54" class="scroller">
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[item.content]"
        :data-index="index"
      >
        <div
          class="p-4 m-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
        >
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-100">
              {{ item.title }}
            </h3>
            <span
              class="px-2 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
            >
              #{{ item.id }}
            </span>
          </div>
          <p class="mt-2 text-gray-600">{{ item.content }}</p>
          <div class="mt-3 flex items-center text-sm text-gray-500">
            <span class="inline-flex items-center">
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {{ item.random }}
            </span>
          </div>
        </div>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const items = ref(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`,
    content: `Content for item ${i + 1}`,
    random: Math.floor(Math.random() * 1000) + 1,
  }))
);
</script>

<style scoped>
.scroller {
  height: 400px;
}
</style>
