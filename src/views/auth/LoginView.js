import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import LoginForm from '../../components/AuthDialog/Forms/LoginForm'

class LoginView extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <LoginForm />
      </Container>
    );
  }
}

export default LoginView;