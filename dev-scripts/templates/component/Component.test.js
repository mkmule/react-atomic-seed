import React from 'react';
import ReactDOM from 'react-dom';
import <%= name %> from './<%= name %>';

it('<%= name %> renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<<%= name %> />, div);
  ReactDOM.unmountComponentAtNode(div);
});
