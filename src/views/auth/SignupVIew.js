import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SignUp from "../../components/AuthDialog/Forms/Signup";
import { teacherRegistration } from '../../services/teacher/index'

const initUser = {
  mobileNumber: '',
  name: '',
  fatherName: '',
  email: '',
  dateOfBirth: '',
  address: '',
  highestQualifiation: '',
  totalExperience: '',
  OnlineExperience: '',
  subject: '',
  password1: '',
  password2: '',
}

class SignupView extends Component {
  handleSubmit = (user) => {
    console.log('Sign up form submit.',user);
    teacherRegistration(user);
    // this.props.addRohit(this.state)
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <SignUp handleSubmit={this.handleSubmit} initUser={initUser} />
      </Container>
    );
  }
}

export default SignupView;
