import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './js/Layout';
import { Home } from './js/Home';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <React.Fragment>
        <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
      </React.Fragment>
    );
  }
}
