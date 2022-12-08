import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState ={
    reviews: [],
    louder: false,
    error: false,
}

export const GetReviewsFunc = createAsyncThunk(
    'reviews/GetReviewsFunc',
    async(_, {dispatch}) => {
        const res = await axios.get(
            'https://looks-project-1.herokuapp.com/api_v1/users/reviews/', {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('access'))}`
            }
        })
        console.log(res.data)
        dispatch(getReviews(res.data))
    }
);

export const PostAddedReviewsFunc = createAsyncThunk(
    'reviews/PostAddedReviewsFunc',
    async(obj, { dispatch }) => {
        const {data} = await axios.post(
            'https://looks-project-1.herokuapp.com/api_v1/users/reviews/', 
            obj);
        // const { data } = res; 
        dispatch(postAddedReviews(data));
        localStorage.setItem("access", JSON.stringify(data.access));
        localStorage.setItem("refresh", JSON.stringify(data.refresh));
    }
);

const reviewsSlice =  createSlice({
    name: 'reviews',
    initialState,
    reducer: {
        getReviews: (state, action) => {
            state.reviews = action.payload
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