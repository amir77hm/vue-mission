<template>
  <div class="">
    <h1>Market</h1>
    <div
      class="bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px] flex items-center justify-center text-white p-4 rounded-md"
      v-if="isGatewayDown"
    >
      <h2>Your data is not up to date, Gateway is down</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import Base from "@/services/Base";
import store from "@/store";

const isGatewayDown = computed(() => {
  return store.getters["market/getIsOpen"];
});

const fetchMarketItems = async () => {
  try {
    const response = await Base.get("/todos/1");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  setInterval(() => {
    fetchMarketItems();
  }, 60000);
});
</script>
