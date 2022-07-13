import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const RETRIEVE = 'bookstore/books/RETRIEVE';

const urlBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lXjl7zLtbljcIl0TN0v2/books';

const initialState = [{
  id: '1',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
}, {
  id: '2',
  title: 'Dune',
  author: 'Frank Herbert',
}, {
  id: '3',
  title: 'Capital in the Twenty-First Century',
  author: 'Suzanne Collins',
}];

export const retrieveBooks = createAsyncThunk(
  RETRIEVE,
  async (dispatch) => {
    try {
      const res = await axios.get(urlBooks);
      dispatch({
        type: RETRIEVE,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  },
);

export const addNewBook = (title, author) => ({
  type: ADD,
  id: uuidv4(),
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case RETRIEVE:
      return state;
    default:
      return state;
  }
};

export default booksReducer;
