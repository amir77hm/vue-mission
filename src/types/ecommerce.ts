export type Product = {
  id: number;
  name: string;
  category: string;
};

export interface BasketItem extends Product {
  quantity: number;
}

export type Purchase = {
  customerId: number;
  productId: number;
  date: string;
};

export type Customer = {
  id: number;
  name: string;
  city: string;
};
