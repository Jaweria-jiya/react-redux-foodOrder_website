import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cardslice"
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})