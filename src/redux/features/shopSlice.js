import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com";

const initialState = {
  products: [],
  loading: false,
  err: {},
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(state);
      console.log("action", action);
      console.log(action.payload);
    },
  },
});

export const { addProduct } = shopSlice.actions;

export default shopSlice.reducer;
