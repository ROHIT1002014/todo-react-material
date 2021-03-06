import React, { Component } from "react";

import Container from "@material-ui/core/Container";

import AddressForm from "../../components/AuthDialog/Forms/userRegtrationForms/AddressForm";

class RegistrationView extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <AddressForm />
      </Container>
    );
  }
}

export default RegistrationView;
