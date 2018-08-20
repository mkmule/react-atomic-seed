import React from 'react';

import './Header.css';
import { Logo, Heading } from '../../index'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <Heading>Welcome to React</Heading>
      </header>
    );
  }
}

export default Header;
