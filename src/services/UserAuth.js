import axios from 'axios';
import Cookies from 'universal-cookie';
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
    console.log(config);
    console.log(loginData);
    axios(config)
      .then((response) => {
        console.log('data after successful call is ', response);
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response);
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
        console.log('data after successful call is ', res);
        localStorage.setItem('isAuth', true);
        localStorage.setItem('token', token);
        resolve(res);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
  return promise;
};

export { loginAuth, whoAmI };
