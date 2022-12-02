import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cards: [],
    louder: false
}

export const GetProductFunc = createAsyncThunk(
    'products/GetProductsFunc',
    async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get(`http://192.168.0.186:8000/api_v1/clothes/`)
            dispatch(getProducts(res.data))
            console.log(res.data.results)

        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const GetShoesFunc = createAsyncThunk(
    'products/GetShoesfunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('http://192.168.0.186:8000/api_v1/clothes?shoes')
            dispatch(getProductsShoes(res.data))
            console.log(res.data.results)
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const GetPantsFunc = createAsyncThunk(
    'products/GetPantsFunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('http://192.168.0.186:8000/api_v1/clothes?pants')
            dispatch(getProductsPants(res.data))
            console.log(res.data.results)
            
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const GetOutermostFunc = createAsyncThunk(
    'products/GetOutermostFunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('http://192.168.0.186:8000/api_v1/clothes?outermost')
            dispatch(getProductsOutermost(res.data))
            console.log(res.data.results)
            
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const GetAccesoriesFunc = createAsyncThunk(
    'products/GetAccesoriesFunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('http://192.168.0.186:8000/api_v1/clothes?accesories')
            dispatch(getProductsAccesories(res.data))
            console.log(res.data.results)
            
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            console.log(action.payload)
            state.cards = action.payload.results
        },
        getProductsShoes: (state, action) => {
            state.cards = action.payload.results
        },
        getProductsOutermost: (state, action) => {
            state.cards = action.payload.results
        },
        getProductsPants: (state, action) => {
            state.cards = action.payload.results
        },
        getProductsAccesories: (state, action) => {
            state.cards = action.payload.results
        }

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

export const  { getProducts, getProductsShoes, getProductsOutermost, getProductsPants, getProductsAccesories } = ProductSlice.actions;
export default ProductSlice.reducer;