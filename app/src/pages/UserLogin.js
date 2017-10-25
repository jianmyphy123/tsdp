import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Header } from '../components'

class UserLogin extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Header />
        <Card className="container">


            <div>
              <h2 className="card-heading">Log In</h2>

              <div className="field-line">
                <TextField
                  floatingLabelText="Email"
                  name="email"
                />
              </div>

              <div className="field-line">
                <TextField
                  floatingLabelText="Password"
                  type="password"
                  name="password"
                />
              </div>

              <div className="button-line">
                <RaisedButton type="submit" label="Log In" primary />
              </div>

              <CardText><Link to={'/signup'}>Sign Up</Link></CardText>
          </div>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default UserLogin;
