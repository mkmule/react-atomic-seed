import React from 'react';

import './Home.css';
import { Atoms, Organisms } from '../../index';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Organisms.Header />

        <div className="home__body">
          <Atoms.Paragraph>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Atoms.Paragraph>
        </div>
      </div>
    );
  }
}

export default Home;
