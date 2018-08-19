import React from 'react';

import './Header.css';
import { Atoms } from '../../index'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Atoms.Logo />
        <Atoms.Heading>Welcome to React</Atoms.Heading>
      </header>
    );
  }
}

export default Header;
