import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cartItems: [],
 quantity: 0,
 totalPrice: 0,
};

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addToCart: (state, action) => {
   const itemInCart = state.cartItems.find(
    (item) => item.price === action.payload.price
   );
   if (!itemInCart) {
    state.cartItems.push({ ...action.payload, quantity: 1 });
    state.quantity += 1;
   }
  },

  removeItem: (state, action) => {
   const itemId = action.payload;
   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  },


  calculateTotals: (state) => {
   let quantity = 0;
   let price = 0;
   state.cartItems.forEach((product) => {
    quantity += product.quantity;
    price += product.quantity * product.price;
   });
   state.quantity = quantity;
   state.totalPrice = price;
  },
 },
});

export const { addToCart, calculateTotals, removeItem } =
 cartSlice.actions;

export default cartSlice.reducer;
