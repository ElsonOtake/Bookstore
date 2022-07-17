import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Remove = () => {
  const dispatch = useDispatch();

  const removeBookById = (event) => {
    const { target } = event;
    const id = target.parentNode.parentNode.firstChild.nextSibling.classList[0];
    dispatch(removeBook(id));
  };

  return (
    <button
      type="button"
      className="text_style_6"
      onClick={removeBookById}
    >
      Remove
    </button>
  );
};

export default Remove;
