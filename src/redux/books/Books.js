import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListBooks from '../../components/ListBooks';
import AddBook from '../../components/AddBook';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

export const addBook = (title, author) => ({
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
    default:
      return state;
  }
};

export const Books = () => (
  <>
    <ListBooks />
    <AddBook />
  </>
);

export default booksReducer;
