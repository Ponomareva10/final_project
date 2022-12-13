import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { config } from "./looksSet";

const initialState = {
  basket: [],
  louder: false,
  total: 0,
  order: [],
  error: "",
};

export const GetBasketFunc = createAsyncThunk(
  "basketProducts/GetBasketFunc",
  async (_, { dispatch }) => {
    const res = await axios.get("http://localhost:3500/basket/");
    dispatch(getBasketProducts(res.data));
  }
);

export const PostAddedToBasketFunc = createAsyncThunk(
  "basketProducts/PostAddedToBasketFunc",
  async (obj, { dispatch }) => {
    const res = await axios.post(`http://localhost:3500/basket/`, obj);
    dispatch(postAddedToBasket(res.data));
  }
);

export const DeleteBasketProductFunc = createAsyncThunk(
  "basketProducts/DeleteBasketProductFunc",
  async (id, { dispatch }) => {
    await axios.delete(`http://localhost:3500/basket/${id}/`);
    dispatch(deleteBasketProduct(id));
  }
);

export const CheckoutOrderFunc = createAsyncThunk(
  "basketProducts/checkoutOrder",
  async (obj, { rejectWithValue, dispatch }) => {
    const res = await axios.post(
      "https://looks-project-1.herokuapp.com/api_v1/orders/order/",
      obj
    );
    dispatch(checkoutOrder(res.data));
  }
);

// basket with backend :

// export const GetBasketFunc = createAsyncThunk(
//     'basketProducts/GetBasketFunc',
//     async(_, {rejectWithValue, dispatch}) => {
//         const res = await axios.get(
//             'https://looks-project-1.herokuapp.com/api_v1/orders/cart/',
//             config
//             );
//         dispatch(getBasketProducts(res.data))
//     }
// );

// export const PostAddedToBasketFunc = createAsyncThunk(
//     'basketProducts/PostAddedToBasketFunc',
//     async(obj, { dispatch }) => {
//         const res = await axios.post(
//             `https://looks-project-1.herokuapp.com/api_v1/orders/cart/`, obj,
//             config
//             );
//         dispatch( postAddedToBasket(res.data))
//     }
// );

// export const PatchBasketFunc = createAsyncThunk(
//     'basketProducts/PatchBasketFunc',
//     async(payload, { dispatch }) => {
//         const res = await axios.patch(
//             `https://looks-project-1.herokuapp.com/api_v1/orders/cart/${payload.id}`, payload.obj,
//             config
//         )
//         dispatch(pathBasketProduct(res.data))
//     }
// );

// export const DeleteBasketProductFunc = createAsyncThunk(
//     'basketProducts/DeleteBasketProductFunc',
//     async(id, { dispatch }) => {
//         await axios.delete(
//             `https://looks-project-1.herokuapp.com/api_v1/orders/cart/${id}`,
//             config
//         )
//         dispatch(deleteBasketProduct(id))
//     }
// );

// export const CheckoutOrderFunc = createAsyncThunk(
//     'basketProducts/checkoutOrder',
//     async(obj, {dispatch}) => {
//         try {
//             const res = await axios.post(
//                 'https://looks-project-1.herokuapp.com/api_v1/orders/order/', obj)
//         dispatch(checkoutOrder(res.data))
//         } catch (e) {
//             dispatch(errorMessage(e.response.data.email[0]))
//         }
//     }
// );

const basketSlice = createSlice({
  name: "basketProducts",
  initialState,
  reducers: {
    getBasketProducts: (state, action) => {
      state.basket = action.payload;
    },
    postAddedToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    pathBasketProduct: (state, action) => {
      state.basket.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteBasketProduct: (state, action) => {
      state.basket.filter((item) => item.state.basket !== action.payload);
    },
    totalSumPrice: (state, action) => {
      state.total = action.payload;
    },
    checkoutOrder: (state, action) => {
      state.order = action.payload;
    },
    errorMessage: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [GetBasketFunc.pending]: (state) => {
      state.louder = true;
    },
    [GetBasketFunc.fulfilled]: (state) => {
      state.louder = false;
    },
  },
});

export const {
  getBasketProducts,
  postAddedToBasket,
  pathBasketProduct,
  deleteBasketProduct,
  totalSumPrice,
  checkoutOrder,
  errorMessage,
} = basketSlice.actions;
export default basketSlice.reducer;
