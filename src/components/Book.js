import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <article>
      <h2 className="title">{title}</h2>
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
  title: '',
  author: '',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
