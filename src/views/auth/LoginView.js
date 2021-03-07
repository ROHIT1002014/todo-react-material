import React, { Component, StrictMode } from 'react';
import log from 'loglevel';

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import LoginForm from '../../components/AuthDialog/Forms/LoginForm';
import { loginAuth } from '../../services/UserAuth';
import { authSuccess } from '../../store/actions/auth';

const initUser = {
  mobileNumber: '',
  password: '',
};

class LoginView extends Component {
  handleSubmit = (user) => {
    const { setAuthSuccess, history } = this.props;
    log.debug(`Login form submit. ${user}`);
    loginAuth(user).then((res) => {
      setAuthSuccess(res.data.auth_token);
      history.push('/home');
    });
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

const mapDispatchToProps = (dispatch) => ({
  setAuthSuccess: (token) => dispatch(authSuccess(token)),
});

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
