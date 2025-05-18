import { Theme, FontSize } from "./setting";

import { BasketItem } from "./ecommerce";

export type MarketState = {
  isOpen: boolean;
  failureCount: number;
  lastFailureTime: number | null;
};

export interface EcommerceState {
  basket: BasketItem[];
}

export type SettingState = {
  theme: Theme;
  fontSize: FontSize;
};

export interface RootState {
  setting: SettingState;
  ecommerce: EcommerceState;
  market: MarketState;
}
