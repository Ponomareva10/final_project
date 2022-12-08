import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    basket: [],
    louder: false,
    total: 0,
    order: [],
    error: '',
}

export const GetBasketFunc = createAsyncThunk(
    'basketProducts/GetBasketFunc',
    async(_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('',{
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('access'))}`
            }
        });
        dispatch(getBasketProducts(res.data))
    }
);

export const PostAddedToBasketFunc = createAsyncThunk(
    'basketProducts/PostAddedToBasketFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.post('', obj)
        dispatch( postAddedToBasket(res.data))
    }
);

export const PatchBasketFunc = createAsyncThunk(
    'basketProducts/PatchBasketFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.post('', obj)
        dispatch( pathBasketProduct(res.data))
    }
);

export const DeleteBasketProductFunc = createAsyncThunk(
    'basketProducts/DeleteBasketProductFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.delete('', obj)
        dispatch(deleteBasketProduct(res.data))
    }
);

export const CheckoutOrderFunc = createAsyncThunk(
    'basketProducts/checkoutOrder',
    async(obj, {dispatch}) => {
        try {
            const res = await axios.post('https://looks-project-1.herokuapp.com/api_v1/orders/order/', obj)
        dispatch(checkoutOrder(res.data))
        } catch (e) {
            dispatch(errorMessage(e.response.data.email[0]))
        }
    }
);

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
        pathBasketProduct: (state, action) => {
            state.basket = action.payload.id
            // посмотреть павильно ли сделала?
        },
        deleteBasketProduct: (state) => {
            state.basket = []
        },
        totalSumPrice: (state, action) => {
            state.total = action.payload;
        },
        checkoutOrder: (state, action) => {
            state.order = action.payload;
        }, 
        errorMessage: (state, action) => {
            state.error = action.payload
        }
    },
    extraReducers: {
        [GetBasketFunc.pending]: (state) => {
            state.louder = true
        },
        [GetBasketFunc.fulfilled]: (state) => {
            state.louder = false
        }
    }
})

export const {getBasketProducts, postAddedToBasket, pathBasketProduct, deleteBasketProduct, totalSumPrice, checkoutOrder, errorMessage} = basketSlice.actions;
export default basketSlice.reducer;