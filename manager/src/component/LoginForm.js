import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);    
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            onChangeText={this.onEmailChange.bind(this)} 
            value ={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label= "Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>        
      </Card>
    );
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);