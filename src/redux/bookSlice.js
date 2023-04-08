import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";

export const fetchBooks = createAsyncThunk("books/fetchBooks",
  async ({ searchTerm, maxResults, order, category }) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&orderBy=${order}&key=${base_url}`;
    if (category !== "all") {
      url += `&${category}`;
    }
    const response = await axios.get(url);
    return response.data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    totalBooks: 0,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = "succesded";
      state.books = action.payload.items;
      state.totalBooks = action.payload.totalItems;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default booksSlice.reducer;
