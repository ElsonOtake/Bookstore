import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import Remove from './Remove';
import Edit from './Edit';

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
