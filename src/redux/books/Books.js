import React from 'react';
import ListBooks from '../../components/ListBooks';
import AddBook from '../../components/AddBook';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

export const addBook = (title, author) => ({
  type: ADD,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const Books = () => (
  <>
    <ListBooks />
    <AddBook />
  </>
);

export default Books;
