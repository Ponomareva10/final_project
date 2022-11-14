import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginUser";
import ProductSlice from './slices/Products'

export const store = configureStore({
    reducer: {
        userSlice,
        loginSlice,
        ProductSlice,
    }
});