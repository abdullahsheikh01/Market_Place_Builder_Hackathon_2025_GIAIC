import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
export const reduxStore = configureStore(
    {
        reducer:{
            cart: cartReducer,
        }
    }
)