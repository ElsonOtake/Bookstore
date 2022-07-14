import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosGet, axiosPost, axiosDelete } from '../api';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const RETRIEVE = 'bookstore/books/RETRIEVE';

const initialState = {
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

export const addNewBook = createAsyncThunk(
  ADD,
  async ([itemId, title, author, category], { dispatch }) => {
    const res = await axiosPost({
      item_id: itemId,
      category,
      title,
      author,
    })
      .then(
        () => dispatch({
          type: ADD,
          id: itemId,
          category,
          title,
          author,
        }),
      );
    return res;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE,
  async (id, { dispatch }) => {
    const res = await axiosDelete(id)
      .then(
        () => dispatch({
          type: REMOVE,
          id,
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
    [retrieveBooks.fulfilled]: (state) => ({
      ...state,
      loading: false,
    }),
    [retrieveBooks.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
    [addNewBook.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [addNewBook.fulfilled]: (state) => ({
      ...state,
      loading: false,
    }),
    [addNewBook.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
    [removeBook.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [removeBook.fulfilled]: (state) => ({
      ...state,
      loading: false,
    }),
    [removeBook.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export const booksAPIReducer = bookSlice.reducer;

const booksReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          category: action.category,
        },
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case RETRIEVE:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
