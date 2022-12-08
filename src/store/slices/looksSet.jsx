import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  looks: [],
  louder: false,
};

export const GetLookFunc = createAsyncThunk(
  "look/GetLookFunc",
  async (obj, { rejectWithValue, dispatch }) => {
    const token = JSON.parse(localStorage.getItem("access"));
    console.log(token);
    const res = await axios.get(
      `https://looks-project-1.herokuapp.com/api_v1/cl_filter/?gender=${obj.gender}&style=${obj.style}&season=${obj.season}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getLook(res.data));
  }
);

const lookSlice = createSlice({
  name: "look",
  initialState,
  reducers: {
    getLook: (state, action) => {
      state.looks = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: {
    [GetLookFunc.pending]: (state) => {
      state.louder = true;
    },
    [GetLookFunc.fulfilled]: (state) => {
      state.louder = false;
    },
  },
});

export const { postLook, getLook } = lookSlice.actions;
export default lookSlice.reducer;
