import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { booksAPIReducer } from './books/Books';
import statusReducer from './categories/Categories';

const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
  booksAPIReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
