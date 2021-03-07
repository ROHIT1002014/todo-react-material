import React, { Component } from 'react';
import log from 'loglevel';

import Container from '@material-ui/core/Container';

import SignUp from '../../components/AuthDialog/Forms/Signup';
import { teacherRegistration } from '../../services/teacher/index';

const initUser = {
  mobileNumber: '',
  name: '',
  fatherName: '',
  email: '',
  dateOfBirth: '2000-12-12',
  address: '',
  highestQualifiation: '',
  totalExperience: '',
  OnlineExperience: '',
  subject: '',
  password1: '',
  password2: '',
};

class SignupView extends Component {
  handleSubmit = (user) => {
    log.debug(`Sign up form submit : ${user}`);
    teacherRegistration(user);
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
