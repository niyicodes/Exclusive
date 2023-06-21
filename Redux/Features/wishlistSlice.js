import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
   state.wishes += 1;
  },
  removeFromWishlist: (state, action) => {
   const itemId = action.payload;
   state.wishListItems = state.wishListItems.filter(
    (item) => item.id !== itemId
   );
   state.wishes -= 1;
   localStorage.setItem("wishlist", JSON.stringify(state));
  },
  clearWishlist: (state) => {
   state.wishListItems = [];
   state.wishes = 0;
  },
 },
});

const persistConfig = {
 key: "wishlist",
 storage: storage,
};

const persistedWishListReducer = persistReducer(
 persistConfig,
 wishlistSlice.reducer
);

export const { addToWishlist, removeFromWishlist, clearWishlist } =
 wishlistSlice.actions;

export default persistedWishListReducer;
