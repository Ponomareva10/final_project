import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginUser";
import ProductSlice from './slices/Products';
import basketSlice from './slices/basketProduct';
import reviewsSlice from './slices/reviewsPost';
import orderSlice from './slices/orderPoint';
import lookSlice from './slices/looksSet';

export const store = configureStore({
    reducer: {
        userSlice,
        loginSlice,
        ProductSlice,
        basketSlice,
        reviewsSlice,
        orderSlice,
        lookSlice
    }
});