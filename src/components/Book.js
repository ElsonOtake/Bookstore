import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Comments from './Comments';
import Remove from './Remove';
import Edit from './Edit';

const Book = (props) => {
  const { id, title, author } = props;
  const progress = Math.round(Math.random() * 100);
  const chapter = Math.round(progress / 2 + 1);
  return (
    <article>
      <p className="category text_style_5">Action</p>
      <h2 className={id}>{title}</h2>
      <p className="text_style_6">{author}</p>
      <span>
        <Comments />
        <Remove />
        <Edit />
      </span>
      <div className="progress_data">
        <CircularProgressbar value={progress} />
        <div className="completed_data">
          <p className="completed">{`${progress}%`}</p>
          <p>Completed</p>
        </div>
        <div className="chapter_data">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">{`Chapter ${chapter}`}</p>
          <button type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
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
