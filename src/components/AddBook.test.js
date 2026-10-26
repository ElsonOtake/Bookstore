import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Books from './Books';
import booksReducer from '../redux/books/Books';

const renderBooks = () => render(
  <Provider store={configureStore({ reducer: { booksReducer } })}>
    <Books />
  </Provider>,
);

const fillBook = (title = 'Dune', author = 'Frank Herbert') => {
  fireEvent.change(screen.getByRole('textbox', { name: 'Book title' }), {
    target: { value: title },
  });
  fireEvent.change(screen.getByRole('textbox', { name: 'Author' }), {
    target: { value: author },
  });
};

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('adds a book, restores it with a fresh store, and persists removal', async () => {
  const view = renderBooks();
  fillBook();
  fireEvent.click(screen.getByRole('button', { name: 'ADD BOOK' }));
  expect(await screen.findByRole('heading', { name: 'Dune' })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByRole('textbox', { name: 'Book title' })).toHaveValue(''));
  expect(screen.getByRole('textbox', { name: 'Author' })).toHaveValue('');

  view.unmount();
  const restoredView = renderBooks();
  expect(await screen.findByRole('heading', { name: 'Dune' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
  await waitFor(() => expect(screen.queryByRole('heading', { name: 'Dune' })).not.toBeInTheDocument());

  restoredView.unmount();
  renderBooks();
  await waitFor(() => expect(JSON.parse(localStorage.getItem('bookstore.books'))).toEqual([]));
  expect(screen.queryByRole('heading', { name: 'Dune' })).not.toBeInTheDocument();
});

test('preserves inputs and allows retry when browser storage fails', async () => {
  const write = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('Storage unavailable');
  });
  renderBooks();
  fillBook();
  fireEvent.click(screen.getByRole('button', { name: 'ADD BOOK' }));

  expect(await screen.findByRole('alert')).toHaveTextContent('Unable to save the book');
  expect(screen.getByRole('textbox', { name: 'Book title' })).toHaveValue('Dune');
  expect(screen.getByRole('textbox', { name: 'Author' })).toHaveValue('Frank Herbert');
  expect(screen.queryByRole('heading', { name: 'Dune' })).not.toBeInTheDocument();

  write.mockRestore();
  fireEvent.click(screen.getByRole('button', { name: 'ADD BOOK' }));
  expect(await screen.findByRole('heading', { name: 'Dune' })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByRole('textbox', { name: 'Book title' })).toHaveValue(''));
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});

test('rejects whitespace-only book titles', async () => {
  renderBooks();
  fillBook('   ');
  fireEvent.click(screen.getByRole('button', { name: 'ADD BOOK' }));
  expect(await screen.findByRole('alert')).toHaveTextContent('Enter a book title and author.');
  expect(localStorage.getItem('bookstore.books')).toBeNull();
});
