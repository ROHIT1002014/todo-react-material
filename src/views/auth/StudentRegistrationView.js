import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import SignUpStudent from '../../components/AuthDialog/Forms/studentRegistration';
import { studentRegistration } from '../../services/student/index';

const initUser = {
  mobileNumber: '',
  password1: '',
  password2: '',
  name: '',
  email: '',
  fatherName: '',
  dateOfBirth: '2000-12-12',
  address: '',
  guardianProfession: '',
  guardianContact: '',
  currentInstitute: '',
};

class StudentRegistrationView extends Component {
  handleSubmit = (user) => {
    console.log('Sign up form submit.', user);
    studentRegistration(user);
    // this.props.addRohit(this.state)
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <SignUpStudent handleSubmit={this.handleSubmit} initUser={initUser} />
      </Container>
    );
  }
}

export default StudentRegistrationView;
