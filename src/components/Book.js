import React from 'react';

const Book = (props) => {
  const [name, author] = props;
  return (
    <article>
      <h2 className="name">{name}</h2>
      <p className="author text_style_6">{author}</p>
      <ul className="text_style_6">
        <Comments />
        <Remove />
        <Edit />
      </ul>
    </article>
  );
};

const Comments = () => <li>Comments</li>;

const Remove = () => {
  const removeBook = () => {

  };
  return <button type="button" onClick={removeBook}>Remove</button>;
};

const Edit = () => <li>Edit</li>;

export default Book;
