import { combineReducers } from 'redux';
import booksReducer from './books/Books';
import statusReducer from './categories/Categories';

const rootReducer = combineReducers({
  booksReducer,
  statusReducer,
});

export default rootReducer;
