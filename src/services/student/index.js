import axios from 'axios';
import log from 'loglevel';
import { studentSignUpURL } from '../../utils/constants';

const studentRegistration = (studentData) => {
  // const sessionFields = JSON.parse(JSON.stringify(session));
  const promise = new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(
        studentSignUpURL,
        studentData, { headers },
      )
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

const studentLogin = (studentData) => {
  // const sessionFields = JSON.parse(JSON.stringify(session));
  const promise = new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(
        studentSignUpURL,
        studentData, { headers },
      )
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

export {
  studentRegistration,
  studentLogin,
};
