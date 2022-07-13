import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { retrieveBooks } from '../redux/books/Books';

const ListBooks = () => {
  const booksData = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  dispatch(retrieveBooks())
    .then((response) => {
      console.log('ListBooks', response);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <ul className="books_list">
      {booksData.map((data) => (
        <li key={data.id}>
          <Book
            id={data.id}
            title={data.title}
            author={data.author}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListBooks;
