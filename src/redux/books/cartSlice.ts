import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../types";

const cartInitialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    // add book to the cart
    addToCart(state, action) {
      const item = state.cartItems.filter(
        (item: Book) => item.id === action.payload.id
      );

      if (!item.length) {
        const itemToAdd = { ...action.payload, quantity: 1 };

        // @ts-ignore
        state.cartItems = [...state.cartItems, itemToAdd];
      }
    },
    // delete book from the cart
    deleteItem(state, action) {
      const index = state.cartItems.findIndex(
        (item: Book) => item.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
    },
    // increase quantity for particular book in the shopping cart
    increaseQuantity(state, action) {
      const idx = state.cartItems.findIndex(
        (item: Book) => item.id === action.payload.id
      );
      // @ts-ignore
      const quantity = state.cartItems[idx].quantity + 1;

      // @ts-ignore
      state.cartItems[idx] = {
        // @ts-ignore
        ...state.cartItems[idx],
        quantity,
      };
    },
    // decrease quantity for particular book in the shopping cart, if quantity < 1, deletes from cart
    decreaseQuantity(state, action) {
      const idx = state.cartItems.findIndex(
        (item: Book) => item.id === action.payload.id
      );

      // @ts-ignore
      if (state.cartItems[idx].quantity === 1) {
        const index = state.cartItems.findIndex(
          (item: Book) => item.id === action.payload.id
        );
        state.cartItems.splice(index, 1);
      } else {
        // @ts-ignore
        const quantity = state.cartItems[idx].quantity - 1;

        // @ts-ignore
        state.cartItems[idx] = {
          // @ts-ignore
          ...state.cartItems[idx],
          quantity,
        };
      }
    },
  },
});
const persistConfig = {
  key: "root",
  storage,
};

const cartReducer = cartSlice.reducer;

export const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const { addToCart, deleteItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
