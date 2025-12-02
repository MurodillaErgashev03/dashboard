import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../services/users';
import { IProduct } from '../services/users/type';

export interface IProductState {
  // products: IProduct[];
}

const initialState: IProductState = {
  // products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // removeCart: (state, action: PayloadAction<number>) => {
    //   state.products = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        // state.products = action.payload.results;
      }
    );
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
