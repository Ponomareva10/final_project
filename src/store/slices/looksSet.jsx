import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  looks: {},
  louder: false,
};

export const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
  },
};

export const GetLookFunc = createAsyncThunk(
  "look/GetLookFunc",
  async (obj, { dispatch }) => {
    const res = await axios.get(
      `https://looks-project-1.herokuapp.com/api_v1/cl_filter/?gender=${obj.gender}&style=${obj.style}&season=${obj.season}`,
      config
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

export const { getLook, getAccesSet } = lookSlice.actions;
export default lookSlice.reducer;
