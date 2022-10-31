import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <Link to="/">
      <h1 className="header">Feedback UI</h1>
    </Link>
  );
};

export default Header;
