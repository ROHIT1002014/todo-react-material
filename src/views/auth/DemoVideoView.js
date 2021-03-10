import React, { Component, StrictMode } from 'react';
import log from 'loglevel';
import axios from 'axios';

import Container from '@material-ui/core/Container';

import DemoVideoForm from '../../components/AuthDialog/Forms/DemoVideoForm';
import { DEMO_VIEO_URL } from '../../utils/constants';

const initUser = {
  title: '',
  description: '',
  file: null,
};

class DemoVideoView extends Component {
  handleSubmit = (user) => {
    log.debug('Video form submit data :', user);
    axios.post(DEMO_VIEO_URL).then((res) => {
      log.debug(res);
    });
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
export default DemoVideoView;
