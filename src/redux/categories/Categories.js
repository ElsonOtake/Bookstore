import React from 'react';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const Categories = () => (
  <section>
    <button type="button">
      Check status
    </button>
  </section>
);

export default Categories;
