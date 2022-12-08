import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "",
  registr: {
    email: "",
    password: "",
    password2: "",
  },
  isRegistrated: false,
};

export const PostRegisterFunc = createAsyncThunk(
  "userLogin/PostRegisterFunc",
  async (obj, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post(
        `https://looks-project-1.herokuapp.com/api_v1/users/register/`,
        obj
        );
      const { data } = res;
      dispatch(setUser(res));
      localStorage.setItem("access", JSON.stringify(data.access));
      localStorage.setItem("refresh", JSON.stringify(data.refresh));
    } catch (e) {
      return rejectWithValue( e.response.data )
    }
  }
);

const userSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isRegistrated = true;
      state.registr = action.payload;
      console.log(action.payload);
    },
    removeUser(state) {
      state.registr = {};
    }
  },
  extraReducers: {
    [PostRegisterFunc.rejected]: (state, action) => {
      state.error = action.payload;
      state.isRegistrated = false;
    }
  }
});

export const { setUser, removeUser, errorMessage } = userSlice.actions;
export default userSlice.reducer;
