import React from 'react';
import Book from './Book';

const ListBooks = () => {
  const booksData = [{
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  }, {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  }, {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  }];

  return (
    <ul className="books_list">
      {booksData.map((data) => (
        <li key={data.id}>
          <Book title={data.title} author={data.author} />
        </li>
      ))}
    </ul>
  );
};

export default ListBooks;
