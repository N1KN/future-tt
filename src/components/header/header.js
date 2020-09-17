import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header card-header">
        <h3>
            <Link className="text-success" to="/">
                FutureTT
            </Link>
        </h3>
    </header>
  );
};

export default Header;
