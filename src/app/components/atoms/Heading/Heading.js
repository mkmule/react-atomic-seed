import React from 'react';

import './Heading.css';

class Heading extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="heading">
        {children}
      </div>
    );
  }
}

export default Heading;
