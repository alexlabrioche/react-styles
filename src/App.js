import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import './App.scss';

import CssStyleComponent from './components/CssStyle';
import CssInJsComponent from './components/CssInJs';
import UiFrameworkComponent from './components/UiFramework';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Appbar />
        <Switch>
          <Route path="/css-sass">
            <CssStyleComponent />
          </Route>
          <Route path="/css-in-js">
            <CssInJsComponent />
          </Route>
          <Route path="/ui-framework">
            <UiFrameworkComponent />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
