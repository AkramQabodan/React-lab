import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com/products";

export const getShopItems = createAsyncThunk(baseURL, () => {
  return fetch(baseURL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const initialState = {
  products: [],
  loaded: false,
  err: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct: (state, action) => {},
  },
  extraReducers: {
    [getShopItems.pending]: (state) => {
      // pending
      state.loaded = false;
    },
    [getShopItems.fulfilled]: (state, action) => {
      // fulfilled
      state.products = action.payload;
      state.loaded = true;
    },
    [getShopItems.rejected]: (state, action) => {
      // rejected
      state.err = action.payload;
      state.loaded = true;
    },
  },
});

export const { addProduct } = shopSlice.actions;

export default shopSlice.reducer;
