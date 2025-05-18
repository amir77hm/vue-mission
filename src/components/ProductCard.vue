<template>
  <div class="product-card">
    <h2>{{ product.name }}</h2>
    <span class="category-badge">{{ product.category }}</span>
    <button
      class="bg-blue-500 text-white p-2 rounded block w-full mt-6 mx-auto"
      @click="addItem(product)"
    >
      Add to Basket
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Product } from "@/types/ecommerce";

defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: "addItem", product: Product): void;
}>();

const addItem = (product: Product) => {
  emit("addItem", product);
};
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card h2 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 1.25rem;
}

.category-badge {
  display: inline-block;
  background: #e0e0e0;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: #666;
}
</style>
