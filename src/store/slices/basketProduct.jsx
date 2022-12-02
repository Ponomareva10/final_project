import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    basket: [
        {price: 200},
        {price: 200},
        {price: 200},
    ],
    louder: false,
    total: 0,
}

export const GetBasketFunc = createAsyncThunk(
    'basketProducts/GetBasketFunc',
    async(_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('')
        dispatch(getBasketProducts(res.data))
    }
)

export const PostAddedToBasketFunc = createAsyncThunk(
    'basketProducts/PostAddedToBasketFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.post('', obj)
        dispatch( postAddedToBasket(res.data))
    }
)

export const DeleteBasketProductFunc = createAsyncThunk(
    'basketProducts/DeleteBasketProductFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.delete('', obj)
        dispatch(deleteBasketProduct(res.data))
    }
)

const basketSlice = createSlice({
    name: 'basketProducts',
    initialState,
    reducers: {
        getBasketProducts: (state, action) => {
            state.basket = action.payload;
        },
        postAddedToBasket: (state, action) => {
            state.basket = action.payload
        },
        deleteBasketProduct: (state, action) => {
            state.basket = action.payload
        },
        totalSumPrice: (state, action) => {
            console.log(action)
            state.total = action.payload;

        }
    },
    // extraReducers: { 
    //     [getBasketProducts.pending]: (state) => {
    //     state.louder = true
    //     },
    //     [getBasketProducts.fulfilled]: (state) => {
    //         state.louder = false
    //     }
    // }
})

export const {getBasketProducts, postAddedToBasket, deleteBasketProduct, totalSumPrice} = basketSlice.actions;
export default basketSlice.reducer;