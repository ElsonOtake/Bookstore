import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/Books';

const Book = (props) => {
  const { id, title, author } = props;
  return (
    <article>
      <h2 className={id}>{title}</h2>
      <p className="text_style_6">{author}</p>
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
  const removeBookById = (event) => {
    const { target } = event;
    const id = target.parentNode.parentNode.firstChild.classList[0];
    const dispatch = useDispatch();
    dispatch(removeBook(id));
  };
  return <button type="button" className="text_style_6" onClick={removeBookById}>Remove</button>;
};

const Edit = () => <button type="button" className="text_style_6">Edit</button>;

Book.defaultProps = {
  id: '',
  title: '',
  author: '',
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
