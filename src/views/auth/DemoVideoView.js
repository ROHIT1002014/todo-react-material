import React, { Component, StrictMode } from 'react';

import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import DemoVideoForm from '../../components/AuthDialog/Forms/DemoVideoForm';

const initUser = {
  title: "",
  description: "",
  file: ""
}


class DemoVideoView extends Component {
  handleSubmit = (user) => {
      console.log('Video form submit.',user);
    };

  render() {
    return (
      <StrictMode>
        <Container component="main" maxWidth="xs">
          <DemoVideoForm handleSubmit={this.handleSubmit} initUser={initUser} />
        </Container>
      </StrictMode>

    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     authSuccess: (token) => dispatch(authSuccess(token))
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//   token: state.authReducer.token,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DemoVideoView);
export default DemoVideoView;
