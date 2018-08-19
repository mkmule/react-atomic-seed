import React from 'react';
import PropTypes from 'prop-types';

import './<%= name %>.css';

class <%= name %> extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="<%= className %>">
        Hello from <%= name %> component
      </div>
    );
  }
}

<%= name %>.defaultProps = {

};

<%= name %>.propTypes = {

};

export default <%= name %>;
