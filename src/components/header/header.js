import React from 'react';
import {Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import './header.css';

const Header = () => {
  return (
    <React.Fragment>
        <Navbar className="header" bg="secondary" variant="dark">
            <LinkContainer to="/">
                <Navbar.Brand className="font-weight-bold border-0">FutureTT</Navbar.Brand>
            </LinkContainer>
        </Navbar>
    </React.Fragment>
  );
};

export default Header;
