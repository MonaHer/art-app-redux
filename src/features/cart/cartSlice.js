import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((artwork) => artwork.slug !== action.payload.slug);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
