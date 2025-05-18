<template>
  <div class="basket-container">
    <h1>Shopping Basket</h1>

    <div v-if="basket.length === 0" class="empty-basket">
      <p>Your basket is empty</p>
    </div>

    <div v-else class="basket-content">
      <div class="basket-items justify-center">
        <div v-for="item in basket" :key="item.id" class="basket-item">
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <div class="quantity-controls">
              <button
                @click="updateQuantity(item, -1)"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item, 1)">+</button>
            </div>
          </div>
          <button @click="removeItem(item.id)" class="remove-btn">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from "@/store";
import { Product } from "@/types/ecommerce";
import { computed } from "vue";

const basket = computed(() => store.getters["ecommerce/getBasketItems"]);

const updateQuantity = (product: Product, quantity: number) => {
  if (quantity > 0) {
    store.dispatch("ecommerce/addItem", product);
  } else {
    store.dispatch("ecommerce/removeItem", product.id);
  }
};

const removeItem = (productId: number) => {
  store.dispatch("ecommerce/clearItem", productId);
};
</script>

<style scoped>
.basket-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.empty-basket {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.basket-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
}

.basket-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
}

.item-details {
  flex: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.quantity-controls button {
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  background: #f5f5f5;
  cursor: pointer;
}

.quantity-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.remove-btn {
  padding: 0.5rem 1rem;
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.basket-summary {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  position: sticky;
  top: 2rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-size: 1.1rem;
}

.checkout-btn {
  width: 100%;
  padding: 1rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.checkout-btn:hover {
  background: #45a049;
}

@media (max-width: 768px) {
  .basket-content {
    grid-template-columns: 1fr;
  }

  .basket-summary {
    position: static;
  }
}
</style>
