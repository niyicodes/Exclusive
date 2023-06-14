import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 wishListItems: [],
 wishes: 0,
};

const wishlistSlice = createSlice({
 name: "wishlist",
 initialState,
 reducers: {
  addToWishlist: (state, action) => {
    state.wishListItems.push(action.payload);
    state.wishes += 1 
  },
  removeFromWishlist: (state, action) => {
   const itemId = action.payload;
   state.wishListItems = state.wishListItems.filter((item) => item.id !== itemId);
  },
 },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
