import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Features/authSlice"
import cartReducer from "./Features/cartSlice";
import wishReducer from "./Features/wishlistSlice";



const rootReducer = combineReducers({
 cart: cartReducer,
 wishlist: wishReducer,
 // Add other reducers here
});

const persistConfig = {
 key: "root",
 storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
 reducer: persistedReducer,
});

export const persistor = persistStore(store);