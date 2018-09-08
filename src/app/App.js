import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Routes } from './App.constants';
import { Home } from './components';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={Routes.root}>
            <Home />
          </Route>

          <Route>
            <Redirect to={Routes.root} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
