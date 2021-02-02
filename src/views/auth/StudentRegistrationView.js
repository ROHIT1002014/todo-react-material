import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SignUpStudent from "../../components/AuthDialog/Forms/studentRegistration";
// import teacherRegistration from '../../services/teacher/index'

class StudentRegistrationView extends Component {
  handleSubmit = (e) => {
    console.log('Sign up form submit.');
    // this.props.addRohit(this.state)
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <SignUpStudent handleSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

export default StudentRegistrationView;
