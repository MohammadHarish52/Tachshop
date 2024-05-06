import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils.js";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // payload lets to add the item
      const item = action.payload;
      // item already in the cart
      const isExistInCart = state.cartItems.find((i) => i._id === item._id);

      if (isExistInCart) {
        state.cartItems = state.cartItems.map((x) =>
          //if matched then set that item to the current item
          x._id === isExistInCart._id ? item : x
        );
      } else {
        // update the items in the cart
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
