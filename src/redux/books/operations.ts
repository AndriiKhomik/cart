import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://gutendex.com";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/books");
      return response.data.results;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
