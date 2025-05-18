<template>
  <div>
    <div class="products-container">
      <h1 class="text-2xl font-bold">Our Products</h1>
      <div class="my-6">
        <label for="navbar-style" class="block text-sm font-medium mb-2"
          >Available Cities</label
        >
        <div class="flex items-center gap-2">
          <select
            id="navbar-style"
            v-model="city"
            class="w-full px-4 py-2 rounded-lg border-2 transition-all duration-300"
          >
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>

          <button
            class="px-4 py-2 rounded-lg border-2 transition-all duration-300"
            @click="clearCity"
          >
            Clear
          </button>
        </div>
      </div>
      <div class="products-grid text-center">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
          @addItem="addItem"
        />
      </div>
      <div
        v-if="recomendedByCategory.length > 0"
        class="recomendations text-center"
      >
        <h2 class="text-2xl font-bold mt-20 mb-4">Recomendations</h2>
        <p class="text-gray-600 mb-8">people also bought</p>
        <div class="products-grid text-center">
          <product-card
            v-for="product in recomendedBySameBuyer"
            :key="product.id"
            :product="product"
            @addItem="addItem"
          />
        </div>
      </div>
      <div
        v-if="recomendedByCategory.length > 0"
        class="recomendations text-center"
      >
        <h2 class="text-2xl font-bold mt-20 mb-4">Recomendations</h2>
        <p class="text-gray-600 mb-8">from the same categories</p>
        <div class="products-grid text-center">
          <product-card
            v-for="product in recomendedByCategory"
            :key="product.id"
            :product="product"
            @addItem="addItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Product } from "@/types/ecommerce";
import productsItems from "@/data/products.json";
import store from "@/store";
import ProductCard from "@/components/ProductCard.vue";

const city = ref("");

const products = computed(() => {
  if (city.value) {
    return store.getters["ecommerce/getBasketItemsByCity"](city.value);
  }
  return productsItems;
});

const addItem = (product: Product) => {
  store.dispatch("ecommerce/addItem", product);
};

const clearCity = () => {
  city.value = "";
};

const recomendedByCategory = computed(
  () => store.getters["ecommerce/getRecommendedProductsBySameCategory"]
);

const recomendedBySameBuyer = computed(
  () => store.getters["ecommerce/getRecommendedProductsBySameBuyer"]
);

const cities = computed(() => store.getters["ecommerce/getCities"]);
</script>

<style scoped>
.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
