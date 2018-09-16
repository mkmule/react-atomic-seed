import React from 'react';

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

export default <%= name %>;
