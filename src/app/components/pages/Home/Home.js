import React from 'react';

import './Home.css';
import { Header, Paragraph } from '../../index';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />

        <div className="home__body">
          <Paragraph>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Paragraph>
        </div>
      </div>
    );
  }
}

export default Home;
