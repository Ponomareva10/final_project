import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    error: '',
    registr: {
        email: "",
        password1: "",
        password2: ""
    },
};

export const PostRegisterFunc = createAsyncThunk(
    'userLogin/PostRegisterFunc',
    async (obj, {dispatch}) => {
        try {
            const res = await axios.post(`http://192.168.0.186:8000/api_v1/users/register/`, obj)
            dispatch(setUser(res.data))
            localStorage.setItem('token', JSON.stringify(res))
        } catch (e) {
            dispatch(errorMessage(e.response.data.email[0]))
        }
    },
);

const userSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUser(state, action) {
            state.registr = action.payload
            console.log(action.payload)
        },
        removeUser(state){
            state.registr = {}
        },
        errorMessage: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const {setUser, removeUser, errorMessage} = userSlice.actions;
console.log(userSlice.actions)

export default userSlice.reducer;