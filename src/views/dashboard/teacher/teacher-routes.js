import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import PropTypes from 'prop-types';

import StudentList from './StudentList';
import Dashboard from '../Dashboard';

const ProfileRoutes = ({ url, param: username }) => (
  <div className="hmm">
    <GuardProvider>
      <Switch>
        <GuardedRoute
          path={`${url}/dashboard`}
          exact
          component={() => <Dashboard param={username} />}
        />
        <GuardedRoute
          path={`${url}/enrolled-students`}
          exact
          component={() => <StudentList param={username} />}
        />
        <Redirect to="/error" />
      </Switch>
    </GuardProvider>
  </div>
);

ProfileRoutes.propTypes = {
  url: PropTypes.string.isRequired,
  // param: PropTypes.string.isRequired,
};

export default ProfileRoutes;
