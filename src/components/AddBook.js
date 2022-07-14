import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/Books';

const AddBook = () => {
  const [state, setState] = useState({
    bookTitle: '',
    bookAuthor: '',
  });

  const dispatch = useDispatch();

  const form = document.querySelector('form');

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewBook([state.bookTitle, state.bookAuthor]));
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="bookTitle"
        type="text"
        placeholder="Book title"
        onChange={handleInputChange}
        required
      />
      <input
        name="bookAuthor"
        type="text"
        placeholder="Author"
        onChange={handleInputChange}
        required
      />
      <input
        type="submit"
        value="ADD BOOK"
      />
    </form>
  );
};

export default AddBook;
