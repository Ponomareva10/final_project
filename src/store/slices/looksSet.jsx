import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    looks: [],
    louder: false,
}

export const PostLookFunc = createAsyncThunk(
    'look/PostLookFunc',
    async(obj, {rejectWithValue, dispatch}) => {
        const res = await axios.post('', obj)
        dispatch( postLook(res.data));
    }
) 

export const GetLookFunc = createAsyncThunk(
    'look/GetLookFunc',
    async(_,{rejectWithValue, dispatch}) => {
        const res = await axios.get('')
        dispatch( getLook(res.data))
    }
)

const lookSlice = createSlice({
    name: 'look',
    initialState,
    reducer: {
        postLook: (state, action) => {
            state.looks = action.payload
        },
        getLook: (state, action) => {
            state.looks = action.payload
        }
    },
    extraReducers: {
        [GetLookFunc.pending]: (state) => {
            state.louder = true
        },
        [GetLookFunc.fulfilled]: (state) => {
            state.louder = false
        }
    }
});

export const {postLook, getLook} = lookSlice.actions;
export default lookSlice.reducer;