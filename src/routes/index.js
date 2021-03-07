import { Switch } from 'react-router-dom';

import { GuardProvider, GuardedRoute } from 'react-router-guards';
import log from 'loglevel';
import Home from '../views/Home';
import LoginView from '../views/auth/LoginView';
import DemoVideoView from '../views/auth/DemoVideoView';
import RegistrationView from '../views/auth/RegistrationView';
import SignupView from '../views/auth/SignupVIew';
import Dashboard from '../views/dashboard/Dashboard';
import StudentRegistrationView from '../views/auth/StudentRegistrationView';
import NotFoundView from '../views/errors/NotFoundView';
import CustomerListView from '../views/customer/CustomerListView';

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    // check condition and then redirect to required page.
    const authen = localStorage.getItem('isAuth');
    log(`the output: ${typeof authen}`);
    // if (Boolean(authen)) {
    //   next();
    // }

    // eslint-disable-next-line no-constant-condition
    if (true) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

const Index = () => (
  <GuardProvider guards={[requireLogin]} error={NotFoundView}>
    <Switch>
      <GuardedRoute path="/" exact component={Home} meta={{ auth: true }} />
      <GuardedRoute path="/login" exact component={LoginView} />

      <GuardedRoute exact path="/signup" component={SignupView} />
      <GuardedRoute exact path="/registration" component={RegistrationView} />
      <GuardedRoute
        exact
        path="/home"
        component={Dashboard}
        meta={{ auth: true }}
      />
      <GuardedRoute exact path="/stureg" component={StudentRegistrationView} />
      <GuardedRoute exact path="/demo" component={DemoVideoView} />
      <GuardedRoute exact path="/customers" component={CustomerListView} />
      <GuardedRoute path="*" component={NotFoundView} />
      {/* <Route exact path="/registrations/:id" component={EditProjectInfo} /> */}
    </Switch>
  </GuardProvider>
);

export default Index;
