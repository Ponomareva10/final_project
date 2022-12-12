import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "",
  login: "",
  password: "",
  loader: false,
  isAuthed: false,
};

export const PostLoginFunc = createAsyncThunk(
  "userLogin/PostloginFunc",
  async (obj, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post(
        `https://looks-project-1.herokuapp.com/api_v1/users/token/`,
        obj
      );
      const { data } = res;
      dispatch(setUserLogin(res));
      localStorage.setItem("access", JSON.stringify(data.access));
      localStorage.setItem("refresh", JSON.stringify(data.refresh));
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const DeleteLoginFunc = createAsyncThunk(
  "userLogin/DeleteloginFunc",
  async (obj, id, { dispatch }) => {
    try {
      const res = await axios.delete(
        `looks-project-1.herokuapp.com/api_v1/users/token/${id}`,
        obj
      );
      dispatch(setUserLogin(res));
    } catch (e) {
      dispatch(
        errorMessage(e.response.data.email[0], e.response.data.password[0])
      );
    }
  }
);

const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.isAuthed = true;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },
    removeUserLogin: (state) => {
      state.login = "";
    },
  },
  extraReducers: {
    [PostLoginFunc.pending]: (state, action) => {
      state.loader = true;
    },
    [PostLoginFunc.fulfilled]: (state, action) => {
      state.loader = false;
    },
    [PostLoginFunc.rejected]: (state, action) => {
      state.error = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setUserLogin, removeUserLogin, errorMessage } =
  loginSlice.actions;
export default loginSlice.reducer;
