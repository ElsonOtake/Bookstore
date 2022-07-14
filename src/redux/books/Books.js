import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { axiosGet, axiosPost } from '../api';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const RETRIEVE = 'bookstore/books/RETRIEVE';

const initialStateOld = [{
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

const initialState = {
  entities: [],
  loading: false,
};

export const retrieveBooks = createAsyncThunk(
  RETRIEVE,
  async (_, { dispatch }) => {
    const res = await axiosGet()
      .then(
        (data) => dispatch({
          type: RETRIEVE,
          payload: data,
        }),
      );
    return res;
  },
);

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  extraReducers: {
    [retrieveBooks.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [retrieveBooks.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      entities: action.payload,
    }),
    [retrieveBooks.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export const booksAPIReducer = bookSlice.reducer;

export const addNewBook = createAsyncThunk(
  ADD,
  async ([title, author]) => {
    const res = await axiosPost({
      item_id: uuidv4(),
      category: 'API',
      title,
      author,
    });
    return res;
  },
);

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const booksReducer = (state = initialStateOld, action = {}) => {
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
