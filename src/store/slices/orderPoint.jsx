import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    order: [],
};

export const GetOrderFunc = createAsyncThunk(
    'order/GetOrderFunc',
    async(_, {rejectWithValue, dispatch}) => {
        try {
            const res = await axios.get('https://looks-project-1.herokuapp.com/api_v1/orders/order_point/')
            dispatch(getOrder(res.data))
            console.log(res.data)
        } catch (error) {
            rejectWithValue(error)
        }
    }
);

const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        getOrder: (state, action) => {
            state.order = action.payload.results;
        }
    }
});

export const { getOrder } = OrderSlice.actions;
export default OrderSlice.reducer;