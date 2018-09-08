import React from 'react';

import './Paragraph.css';

class Paragraph extends React.Component {
  render() {
    const { children } = this.props;

    return <p className="paragraph">{children}</p>;
  }
}

export default Paragraph;
