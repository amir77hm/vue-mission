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

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type UserState = {
  currentUser: User | null;
  cachedUsers: User[];
  loading: boolean;
  error: string | null;
  abortController: AbortController | null;
};
export interface RootState {
  setting: SettingState;
  ecommerce: EcommerceState;
  market: MarketState;
  user: UserState;
}
