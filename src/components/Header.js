import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <span
        className="material-icons-outlined md-36 md-blue"
      >
        person_outline
      </span>
    </nav>

    <Outlet />
  </>
);

export default Header;
