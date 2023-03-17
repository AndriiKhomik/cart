import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks } from "./operations";
import { Book } from "../../types";

interface BookState {
  items: Book[];
  isLoading: boolean;
  error: null | Error;
}

const booksInitialState = {
  items: [],
  isLoading: false,
  error: null,
} as BookState;

const onFetchSuccessReducer = (
  state: BookState,
  action: PayloadAction<Book[]>
) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const onPendingReducer = (state: BookState) => {
  state.isLoading = true;
};

const onRejectedReducer = (state: BookState, action: PayloadAction<Book[]>) => {
  state.isLoading = false;
  // @ts-ignore
  state.error = action.payload;
};

const booksSlice = createSlice({
  // @ts-ignore
  reducers: undefined,
  name: "books",
  initialState: booksInitialState,
  extraReducers: (builder) =>
    // @ts-ignore
    builder
      .addCase(fetchBooks.fulfilled, onFetchSuccessReducer)
      .addCase(fetchBooks.pending, onPendingReducer)
      .addCase(fetchBooks.rejected, onRejectedReducer),
});

export const booksReducer = booksSlice.reducer;
