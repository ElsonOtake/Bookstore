import React from 'react';

const Header = () => {
  return (
    <>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;