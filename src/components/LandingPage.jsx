import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <ul>
        <Link to ='/buy/'>
          <li>
            buy something!
          </li>
        </Link>
        <Link to='/sell/'>
          <li>
            sell something!
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LandingPage;