import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/buy/">
          <li>buy something</li>
        </Link>
        <Link to="/sell/">
          <li>sell something</li>
        </Link>
        <Link to="/basket/">
          <li>my basket</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
