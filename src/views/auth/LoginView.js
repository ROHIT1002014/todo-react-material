import React, { Component, StrictMode } from 'react';

import Container from '@material-ui/core/Container';

import LoginForm from '../../components/AuthDialog/Forms/LoginForm';
import { loginAuth } from '../../services/UserAuth';

const initUser = {
  mobileNumber: "",
  password: ""
}


class LoginView extends Component {
  handleSubmit = (user) => {
      console.log('Login form submit.',user);
    loginAuth(user).then((res) => {
      this.props.history.push('/home')
    })
    };

  render() {
    return (
      <StrictMode>
        <Container component="main" maxWidth="xs">
          <LoginForm handleSubmit={this.handleSubmit} initUser={initUser} />
        </Container>
      </StrictMode>

    );
  }
}

export default LoginView;