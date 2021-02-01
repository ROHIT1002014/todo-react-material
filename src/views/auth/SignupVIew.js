import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SignUp from "../../components/AuthDialog/Forms/Signup";
// import teacherRegistration from '../../services/teacher/index'

class SignupView extends Component {
  handleSubmit = (e) => {
    console.log('Sign up form submit.');
    // this.props.addRohit(this.state)
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <SignUp handleSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

export default SignupView;
