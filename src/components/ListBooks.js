import React from 'react';
import Book from './Book';

const ListBooks = () => {
  const booksData = [];

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
