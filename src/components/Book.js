import React from 'react';

const Book = (props) => {
  const [name, author] = props;
  return (
    <article>
      <h2 className="name">{name}</h2>
      <p className="author text_style_6">{author}</p>
      <span className="text_style_6">
        <Comments />
        <Remove />
        <Edit />
      </span>
    </article>
  );
};

const Comments = () => <button type="button">Comments</button>;

const Remove = () => {
  const removeBook = () => {

  };
  return <button type="button" onClick={removeBook}>Remove</button>;
};

const Edit = () => <button type="button">Edit</button>;

export default Book;
