import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 15 },
    { name: "Banana", price: 20 },
    { name: "Blueberries", price: 30 },
  ],
  cart: [],
  total: 0,
};

// we interact with the state with reducers.
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (_, index) => index !== action.payload.index
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
