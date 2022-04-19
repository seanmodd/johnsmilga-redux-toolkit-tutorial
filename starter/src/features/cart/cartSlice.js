import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { openModal } from '../modal/modalSlice';
import CartItems from '../../cartItems';
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: CartItems,
  amount: 4,
  total: 0,
  isLoading: false,
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      console.log("dispatch(clearCart()) dispatch")
      state.cartItems = [];
    },
  },
  
});

// console.log(cartSlice);
export const { clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
