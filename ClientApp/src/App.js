import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/js/Layout';
// import { Home } from './components/js/Home';
import { FetchData } from './components/js/FetchData';
import { Counter } from './components/js/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
