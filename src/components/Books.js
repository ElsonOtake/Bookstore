import React from 'react';
import ListBooks from './ListBooks';
import AddBook from './AddBook';

const Books = () => (
  <>
    <ListBooks />
    <hr />
    <h3>ADD NEW BOOK</h3>
    <AddBook />
  </>
);

export default Books;
