import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginUser";
import ProductSlice from './slices/Products';
import basketSlice from './slices/basketProduct';
import reviewsSlice from './slices/reviewsPost';

export const store = configureStore({
    reducer: {
        userSlice,
        loginSlice,
        ProductSlice,
        basketSlice,
        reviewsSlice,
    }
});