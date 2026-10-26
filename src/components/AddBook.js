import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/Books';

const AddBook = () => {
  const [state, setState] = useState({
    bookTitle: '',
    bookAuthor: '',
  });

  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (saving) return;
    const title = state.bookTitle.trim();
    const author = state.bookAuthor.trim();
    if (!title || !author) {
      setError('Enter a book title and author.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      await dispatch(addNewBook([uuidv4(), title, author, 'Uncategorized'])).unwrap();
      setState({ bookTitle: '', bookAuthor: '' });
    } catch {
      setError('Unable to save the book. Check that browser storage is available and try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="bookTitle"
        type="text"
        placeholder="Book title"
        aria-label="Book title"
        value={state.bookTitle}
        disabled={saving}
        onChange={handleInputChange}
        required
      />
      <input
        name="bookAuthor"
        type="text"
        placeholder="Author"
        aria-label="Author"
        value={state.bookAuthor}
        disabled={saving}
        onChange={handleInputChange}
        required
      />
      <input
        type="submit"
        value={saving ? 'SAVING...' : 'ADD BOOK'}
        disabled={saving}
      />
      {error && <p role="alert">{error}</p>}
    </form>
  );
};

export default AddBook;
