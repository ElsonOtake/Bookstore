import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ListBooks = () => {
  const booksData = useSelector((state) => state.booksReducer);

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
