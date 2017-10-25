import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Header } from '../components';

class UserSignup extends Component {
  render() {
    return(
      <MuiThemeProvider>
        <Header />
        <Card className="container">


            <div>
              <h2 className="card-heading">Sign Up</h2>

              <div className="field-line">
                <TextField
                  floatingLabelText="Name"
                  name="name"
                />
              </div>

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
                <RaisedButton type="submit" label="Create New Account" primary />
              </div>

              <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
          </div>
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default UserSignup;
