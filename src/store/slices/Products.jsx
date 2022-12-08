import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cards: [],
    louder: false,
}

export const GetProductFunc = createAsyncThunk(
    'products/GetProductsFunc',
    async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get(`https://looks-project-1.herokuapp.com/api_v1/clothes/`)
            dispatch(getProducts(res.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
);      

export const GetShoesFunc = createAsyncThunk(
    'products/GetShoesfunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('https://looks-project-1.herokuapp.com/api_v1/cat_filter/?category=shoes')
            dispatch(getProductsShoes(res.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
);

export const GetPantsFunc = createAsyncThunk(
    'products/GetPantsFunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('https://looks-project-1.herokuapp.com/api_v1/cat_filter/?category=legs')
            dispatch(getProductsPants(res.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
);

export const GetOutermostFunc = createAsyncThunk(
    'products/GetOutermostFunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('https://looks-project-1.herokuapp.com/api_v1/cat_filter/?category=torso')
            dispatch(getProductsOutermost(res.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
);

export const GetAccesoriesFunc = createAsyncThunk(
    'products/GetAccesoriesFunc',
        async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('https://looks-project-1.herokuapp.com/api_v1/accessories/')
            dispatch(getProductsAccesories(res.data))
        } catch (error) {
            rejectWithValue(error)
        }
    }
);

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.cards = action.payload.results
        },
        getProductsShoes: (state, action) => {
            state.cards = action.payload
        },
        getProductsOutermost: (state, action) => {
            state.cards = action.payload
        },
        getProductsPants: (state, action) => {
            state.cards = action.payload
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
});

export const  { getProducts, getProductsShoes, getProductsOutermost, getProductsPants, getProductsAccesories } = ProductSlice.actions;
export default ProductSlice.reducer;