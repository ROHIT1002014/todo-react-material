import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import SignUp from '../../components/AuthDialog/Forms/Signup'

class SignupView extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <SignUp />
      </Container>
    );
  }
}

export default SignupView;