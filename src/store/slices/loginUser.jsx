import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    login: '',
    password: '',
    loader: false
};

export const PostLoginFunc = createAsyncThunk(
    'userLogin/PostloginFunc',
    async (obj, {dispatch}) => {
        try {
            const res = await axios.post(`http://192.168.0.186:8000/api_v1/users/token/`, obj)
            console.log(res)
            dispatch(setUserLogin(res))
        } catch (e) {
            alert(e)
        }
    }
)

const loginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            console.log(action.payload)
            state.login = action.payload.login;
            state.password = action.payload.password;
        },
        removeUserLogin: (state) => {
            state.login = '';
        },
    },
    extraReducers: {
        [PostLoginFunc.pending]: (state, action) => {
            state.loader = true
        },
        [PostLoginFunc.fulfilled]: (state, action) => {
            state.loader = false
        },
        [PostLoginFunc.rejected]: () => {},
    }
});

export const {setUserLogin, removeUserLogin} = loginSlice.actions;
export default loginSlice.reducer;