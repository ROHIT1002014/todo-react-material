import axios from 'axios';
import Cookies from 'universal-cookie';
import log from 'loglevel';
import { userLoginURL, userProfileURL } from '../utils/constants';

const cookies = new Cookies();

const loginAuth = (loginData) => {
  const promise = new Promise((resolve, reject) => {
    const data = JSON.stringify(loginData);
    const config = {
      method: 'POST',
      url: userLoginURL,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      data,
    };
    log.debug(config);
    log.debug(loginData);
    axios(config)
      .then((response) => {
        log.debug(`data after successful call is : ${response}`);
        resolve(response);
      })
      .catch((error) => {
        log.debug(error.response);
        reject(error);
      });
  });
  return promise;
};

const whoAmI = (token) => {
  const promise = new Promise((resolve, reject) => {
    cookies.set('auth_token', token);
    axios
      .get(userProfileURL, {
        headers: { Authorization: `token ${token}` },
      })
      .then((res) => {
        log.debug(`data after successful call is : ${res}`);
        localStorage.setItem('isAuth', true);
        localStorage.setItem('token', token);
        resolve(res);
      })
      .catch((error) => {
        log.debug(error);
        reject(error);
      });
  });
  return promise;
};

export { loginAuth, whoAmI };
