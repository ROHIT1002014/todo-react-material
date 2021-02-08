import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../views/Home';
import LoginView from './../views/auth/LoginView';
import RegistrationView from './../views/auth/RegistrationView';
import SignupView from './../views/auth/SignupVIew';
import StudentRegistrationView from '../views/auth/StudentRegistrationView';
import App from '../views/dashboard/DashboardIndex'

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/signup" component={SignupView} />
          <Route exact path="/registration" component={RegistrationView} />
          <Route path="/home" component={App} />
          <Route exact path="/stureg" component={StudentRegistrationView} />
          {/* <Route exact path="/nestRoute" component={App} /> */}
          {/* <Route exact path="/registrations/:id" component={EditProjectInfo} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Index;
