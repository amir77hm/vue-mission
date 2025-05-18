import { Module } from "vuex";
import { BasketItem, Customer, Product, Purchase } from "@/types/ecommerce";
import { RootState } from "../index";
import customers from "@/data/customers.json";
import purchases from "@/data/purchases.json";
import products from "@/data/products.json";

export interface EcommerceState {
  basket: BasketItem[];
}

const basketModule: Module<EcommerceState, RootState> = {
  namespaced: true,

  state: {
    basket: [],
  },

  getters: {
    getBasketItems: (state) => state.basket,
    getBasketItemsByCity: (state) => (city: string) => {
      const customersByCity = new Set(
        customers
          .filter((customer: Customer) => customer.city === city)
          .map((c: Customer) => c.id)
      );

      return purchases
        .filter((purchase: Purchase) =>
          customersByCity.has(purchase.customerId)
        )
        .map((purchase) =>
          products.find((product: Product) => product.id === purchase.productId)
        );
    },
    getCities: (state) => {
      return new Set(customers.map((customer: Customer) => customer.city));
    },
    getRecommendedProductsBySameCategory: (state) => {
      const basketCategories = new Set(
        state.basket.map((item: BasketItem) => item.category)
      );

      const basketProductIds = new Set(
        state.basket.map((item: BasketItem) => item.id)
      );

      return products.filter(
        (product: Product) =>
          basketCategories.has(product.category) &&
          !basketProductIds.has(product.id)
      );
    },

    getRecommendedProductsBySameBuyer: (state) => {
      const basketProductIds = state.basket.map((item: BasketItem) => item.id);

      // Step 1: Find customers who bought any product in the basket
      const relevantCustomerIds = new Set(
        purchases
          .filter((purchase) => basketProductIds.includes(purchase.productId))
          .map((purchase) => purchase.customerId)
      );

      const recommendedProductIds = new Set<number>();

      // Step 2: Find other products bought by those customers (excluding basket items)
      purchases.forEach((purchase) => {
        if (
          relevantCustomerIds.has(purchase.customerId) &&
          !basketProductIds.includes(purchase.productId)
        ) {
          recommendedProductIds.add(purchase.productId);
        }
      });

      // Step 3: Get the full product info from the product list
      const recommendedProducts: Product[] = products.filter((product) =>
        recommendedProductIds.has(product.id)
      );

      return recommendedProducts;
    },
  },

  mutations: {
    ADD_ITEM(state, product: Product) {
      const existingItem = state.basket.find((i) => i.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.basket = [...state.basket, { ...product, quantity: 1 }];
      }
    },

    REMOVE_ITEM(state, productId: number) {
      const exsistingProduct: BasketItem | undefined = state.basket.find(
        (item) => item.id === productId
      );
      if (exsistingProduct && exsistingProduct?.quantity > 1) {
        exsistingProduct.quantity--;
      }
    },

    CLEAR_ITEM(state, productId: number) {
      state.basket = state.basket.filter((item) => item.id !== productId);
    },

    CLEAR_BASKET(state) {
      state.basket = [];
    },
  },

  actions: {
    addItem({ commit }, item: Product) {
      commit("ADD_ITEM", item);
    },

    removeItem({ commit }, itemId: number) {
      commit("REMOVE_ITEM", itemId);
    },

    clearBasket({ commit }) {
      commit("CLEAR_BASKET");
    },
    clearItem({ commit }, itemId: number) {
      commit("CLEAR_ITEM", itemId);
    },
  },
};

export default basketModule;
