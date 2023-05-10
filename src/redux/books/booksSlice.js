import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1m9Nqcob22NpZzavLMw6/books';

export const getBooks = createAsyncThunk('book/getBooks', async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('book/getBooks', async (bookData) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: bookData,
    });
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  bookList: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.bookList = state.bookList.filter((book) => book.item_id !== itemId);
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookList = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
