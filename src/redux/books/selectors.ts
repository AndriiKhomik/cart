import { Book } from "../../types";

export const selectBooks = (state: { items: { items: Book[] } }) =>
  state.items.items;

export const selectCartItems = (state: { cart: { cartItems: Book[] } }) =>
  state.cart.cartItems;
