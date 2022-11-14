import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cards: [],
    louder: false
}

export const GetProductFunc = createAsyncThunk(
    'products/GetProductsFunc',
    async(_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        dispatch(getProducts(res.data))
    }
)

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.cards = action.payload
        },
    },
    extraReducers: {
        [GetProductFunc.pending]: (state) => {
            state.louder = true
        },
        [GetProductFunc.fulfilled]: (state) => {
            state.louder = false
        }
    }
})

export const  { getProducts } = ProductSlice.actions;
export default ProductSlice.reducer;