import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from './../views/Home';
import LoginView from './../views/auth/LoginView';
import RegistrationView from './../views/auth/RegistrationView';
import SignupView from './../views/auth/SignupVIew';
import Dashboard from './../views/dashboard/Dashboard';

class Index extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignupView} />
        <Route exact path="/registration" component={RegistrationView} />
        <Route exact path="/home" component={Dashboard} />
        {/* <Route exact path="/registrations/:id" component={EditProjectInfo} /> */}
      </Switch>
    );
  }
}

export default Index;
