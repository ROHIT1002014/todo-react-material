import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import RegisterForm from '../../components/AuthDialog/Forms/RegisterForm'

class RegistrationView extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <RegisterForm />
        {/* <h2>alsdfasldfld laskdf lkdf </h2> */}
      </Container>
    );
  }
}

export default RegistrationView;