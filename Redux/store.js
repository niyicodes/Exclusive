import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authSlice"
import cartReducer from "./Features/cartSlice";
import wishReducer from "./Features/wishlistSlice";


export const store = configureStore({
 reducer:{
  cart: cartReducer,
  wishlist: wishReducer
 }
})