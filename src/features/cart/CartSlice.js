import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//Cart内の初期化
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: () => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const newCartItems = state.cartItems.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
      state.cartItems = newCartItems;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      if (action.payload.amount > 0) {
        const cartItem = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
