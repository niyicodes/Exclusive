import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authSlice"
import cartReducer from "./Features/cartSlice";
import wishReducer from "./Features/wishlistSlice";


const store = configureStore({
 reducer:{
  cart: cartReducer,
  wishlist: wishReducer
 }
})

export default store