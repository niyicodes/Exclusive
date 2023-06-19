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
    (item) => item.id === action.payload.id
   );
   if (itemInCart) {
    itemInCart.quantity++;
   }else{
    state.cartItems.push({ ...action.payload, quantity: 1 });
   }
   state.quantity = state.quantity + 1
  },

  increaseQuantity: (state, { payload }) => {
   const cartItem = state.cartItems.find((item) => item.id === payload.id);
   cartItem.quantity = cartItem.quantity + 1;
  },
  decreaseQuantity: (state, { payload }) => {
   const cartItem = state.cartItems.find((item) => item.id === payload.id);
   cartItem.quantity = cartItem.quantity - 1;
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

export const {
 addToCart,
 increaseQuantity,
 decreaseQuantity,
 calculateTotals,
 removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
