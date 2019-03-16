import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './scenes/home/home';
import Login from './scenes/login/login';

import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </>
    );
  }
}

export default App;
