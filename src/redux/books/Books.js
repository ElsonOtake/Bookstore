import React from 'react';
import ListBooks from '../../components/ListBooks';
import AddBook from '../../components/AddBook';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const Books = () => (
  <>
    <ListBooks />
    <AddBook />
  </>
);

export default Books;
