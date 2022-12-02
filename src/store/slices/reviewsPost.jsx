import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    reviews: [],
    louder: false,
}

export const GetReviewsFunc = createAsyncThunk(
    'reviews/GetReviewsFunc',
    async(_, {rejectWithValue, dispatch}) => {
        const res = await axios.get('http://192.168.0.186:8000/api_v1/users/reviews/')
        console.log(res.data)
        dispatch(getReviews(res.data))
    }
)

export const PostAddedReviewsFunc = createAsyncThunk(
    'reviews/PostAddedReviewsFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.post('', obj)
        dispatch( postAddedReviews(res.data))
    }
)

const reviewsSlice =  createSlice({
    name: 'reviews',
    initialState,
    reducer: {
        getReviews: (state, action) => {
            state.reviews = action.payload.results
        },
        postAddedReviews: (state, action) => {
            state.reviews = action.payload
        },
    },
    extrareducers: {
        [GetReviewsFunc.pending]: (state) => {
            state.louder = true
            },
            [GetReviewsFunc.fulfilled]: (state) => {
                state.louder = false
            }
    }
})

export const {getReviews, postAddedReviews} = reviewsSlice.actions;
export default reviewsSlice.reducer;