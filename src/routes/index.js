import React from "react";
import { Switch } from "react-router-dom";

import Home from "./../views/Home";
import LoginView from "./../views/auth/LoginView";
import RegistrationView from "./../views/auth/RegistrationView";
import SignupView from "./../views/auth/SignupVIew";
import Dashboard from "./../views/dashboard/Dashboard";
import StudentRegistrationView from "../views/auth/StudentRegistrationView";
import NotFoundView from './../views/errors/NotFoundView';
import { GuardProvider, GuardedRoute } from "react-router-guards";

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    // check condition and then redirect to required page.
    if (true) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

class Index extends React.Component {
  render() {
    return (
      <GuardProvider guards={[requireLogin]} error={NotFoundView}>
        <Switch>
          <GuardedRoute path="/login" exact component={LoginView} />
          <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
          <GuardedRoute exact path="/signup" component={SignupView} />
          <GuardedRoute
            exact
            path="/registration"
            component={RegistrationView}
          />
          <GuardedRoute exact path="/home" component={Dashboard} />
          <GuardedRoute
            exact
            path="/stureg"
            component={StudentRegistrationView}
          />
          <GuardedRoute path="*" component={NotFoundView} />
          {/* <Route exact path="/registrations/:id" component={EditProjectInfo} /> */}
        </Switch>
      </GuardProvider>
    );
  }
}

export default Index;