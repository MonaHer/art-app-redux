import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/artworks/apiSlice";
import { cartSlice } from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
