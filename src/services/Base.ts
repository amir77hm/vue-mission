import axios from "axios";
import store from "@/store";

const Base = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

Base.interceptors.request.use(
  (config) => {
    store.dispatch("market/checkCircuitBreaker");
    if (store.getters["market/getIsOpen"]) {
      return Promise.reject(new Error("Service Unavailable"));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Base.interceptors.response.use(
  (response) => {
    store.dispatch("market/resetCircuitBreaker");
    return response;
  },
  (error) => {
    store.dispatch("market/incrementFailureCount");
    return Promise.reject(error);
  }
);
export default Base;
