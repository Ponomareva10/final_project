import{ createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    login: '',
    loader: false
};

export const PostLoginFunc = createAsyncThunk(
    'userLogin/PostloginFunc',
    async (obj, {dispatch}) => {
        const res = await axios.post(`dsnfkjv`, obj)
        dispatch(setUsetLogin(res))
    }
)

const loginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUsetLogin: (state, action) => {
            state.login = action.payload.login;
        },
        removeUserLogin: (state) => {
            state.login = '';
        },
    },
    extraReducers: {
        [PostLoginFunc.pending]: (state, action) => {
            state.loader = true
        },
        [PostLoginFunc.fulfilled]: (state, axtion) => {
            state.loader = false
        },
        // [PostLoginFunc.rejected]: () => {},

    }
});

export const {setUsetLogin, removeUserLogin} = loginSlice.actions;
export default loginSlice.reducer;