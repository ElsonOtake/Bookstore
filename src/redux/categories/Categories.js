import React from 'react';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export const Categories = () => (
  <section>
    <button type="button">
      Check status
    </button>
  </section>
);

export default statusReducer;
