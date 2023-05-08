import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categorieReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    book: bookReducer,
    categorie: categorieReducer,
  },
});

export default store;
