import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../helpers/bookList';

const initialState = {
  bookList: bookItems,
};

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.bookList = state.bookList.filter((book) => book.item_id !== itemId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
