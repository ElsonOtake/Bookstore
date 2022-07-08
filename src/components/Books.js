import React from 'react';
import PropTypes from 'prop-types';

const Books = () => (
  <>
    <ListBooks />
    <AddBooks />
  </>
);

const ListBooks = () => {
  const booksData = [{
    id: 1,
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
  }, {
    id: 2,
    name: 'Dune',
    author: 'Frank Herbert',
  }, {
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

const Book = (props) => {
  const { name, author } = props;
  return (
    <article>
      <h2 className="name">{name}</h2>
      <p className="author text_style_6">{author}</p>
      <span>
        <Comments />
        <Remove />
        <Edit />
      </span>
    </article>
  );
};

const Comments = () => <button type="button" className="text_style_6">Comments</button>;

const Remove = () => {
  const removeBook = () => {

  };
  return <button type="button" className="text_style_6" onClick={removeBook}>Remove</button>;
};

const Edit = () => <button type="button" className="text_style_6">Edit</button>;

Book.defaultProps = {
  name: '',
  author: '',
};

Book.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
};

const AddBooks = () => (
  <form>
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Author" />
    <input type="submit" value="ADD BOOK" />
  </form>
);

export default Books;
