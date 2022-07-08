import React from 'react';
import Book from './Book';

const ListBooks = () => {
  const booksData = [{
    id: 1,
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
  },{
    id: 2,
    name: 'Dune',
    author: 'Frank Herbert',
  },{
    id: 3,
    name: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  }];

  return (
    <ul className="books_list">
      {booksData.map((data) => (
        <li key={data.id}>
          <Book name={data.name} author={data.author} />
        </li>
      ))}
    </ul>
  );
};

export default ListBooks;