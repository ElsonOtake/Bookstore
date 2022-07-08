import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => (
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
);

export default Header;
