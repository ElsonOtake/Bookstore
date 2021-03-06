import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

const Categories = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.statusReducer);

  const onClick = (event) => {
    event.preventDefault();
    dispatch(checkStatus());
  };

  return (
    <section>
      <button
        type="button"
        onClick={onClick}
      >
        Check status
      </button>
      <h2>{message}</h2>
    </section>
  );
};

export default Categories;
