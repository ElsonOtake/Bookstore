import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import statusReducer from './categories/Categories';

const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
