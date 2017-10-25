import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { UserSignup, UserLogin } from './pages';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={UserSignup} />
            <Route exact path='/login' component={UserLogin} />
            <Route exact path='/signup' component={UserSignup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
