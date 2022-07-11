import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import statusReducer from './categories/Categories';

const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
