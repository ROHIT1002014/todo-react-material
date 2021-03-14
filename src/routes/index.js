import { Switch } from 'react-router-dom';

import { GuardProvider, GuardedRoute } from 'react-router-guards';
import log from 'loglevel';
import Home from '../views/Home';
import LoginView from '../views/auth/LoginView';
import DemoVideoView from '../views/auth/DemoVideoView';
import SignupView from '../views/auth/SignupVIew';
import StudentRegistrationView from '../views/auth/StudentRegistrationView';
import NotFoundView from '../views/errors/NotFoundView';
import CustomerListView from '../views/dashboard/teacher/index';

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
      {/* student routes */}
      <GuardedRoute
        exact
        path="/student/registration"
        name="student-registration"
        component={StudentRegistrationView}
      />

      {/* teacher routes */}
      <GuardedRoute
        exact
        path="/upload-video"
        name="upload-video"
        component={DemoVideoView}
      />
      <GuardedRoute
        name="teacher"
        path="/teacher"
        component={CustomerListView}
      />
      <GuardedRoute path="*" component={NotFoundView} />
      {/* <Route exact path="/registrations/:id" component={EditProjectInfo} /> */}
    </Switch>
  </GuardProvider>
);

export default Index;
