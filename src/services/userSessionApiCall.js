import axios from 'axios';
import Vue from 'vue';
import Logger from '@/logger/index';
import store from '@/store';
import { SERVER_URL } from '@/config/constants';

const deleteUserSession = (user, sessionId) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .delete(`${SERVER_URL}/api/rms/user/${user.name}/sessions/${sessionId}`)
      .then((response) => {
        store.dispatch('deleteUserSession', sessionId);
        resolve(response);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
  return promise;
};

const addUserSession = (user, session) => {
  const sessionFields = JSON.parse(JSON.stringify(session));
  Vue.$log.debug('Data from API call is ', sessionFields);
  Vue.$log.debug('JWT token', user.token);
  const promise = new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    axios
      .post(
        `${SERVER_URL}/api/rms/user/${user.name}/sessions/`,
        { sessions: sessionFields }, { headers },
      )
      .then((response) => {
        Vue.$log.debug('data after successful call is ', response.status);
        sessionFields.session_id = response.data.data;
        store.dispatch('addUserSession', sessionFields);
        resolve(response);
      })
      .catch((error) => {
        Logger.error(error.response);
        reject(error);
      });
  });
  return promise;
};

const fetchUserSessionAndStore = (user) => {
  const promise = new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    axios
      .get(`${SERVER_URL}/api/rms/user/${user.name}/sessions/`, { headers })
      .then((response) => {
        Vue.$log.debug('data after authentication is ', response.data.data);
        store.dispatch('setUserSessions', response.data.data);
        resolve(response.data);
      })
      .catch((error) => {
        Logger.error(error.response.data);
        reject(error.response.data);
      });
  });
  return promise;
};

const updateUserSessionAndUpdateStore = (user, session) => {
  const promise = new Promise((resolve, reject) => {
    // Update current user session.
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
    axios
      .put(
        `${SERVER_URL}/api/rms/user/${user.name}/sessions/`,
        { sessions: session }, { headers },
      )
      .then((response) => {
        Vue.$log.debug('data is ', response.status);
        store.dispatch('updateUserSessions', session);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
  return promise;
};

export {
  fetchUserSessionAndStore,
  deleteUserSession,
  addUserSession,
  updateUserSessionAndUpdateStore,
};
