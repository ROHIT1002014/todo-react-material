import axios from 'axios';
import { teacherSignUpURL } from '../../utils/constants';

const teacherRegistration = (teacherData) => {
  // const sessionFields = JSON.parse(JSON.stringify(session));
  const promise = new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(
        teacherSignUpURL,
        teacherData, { headers },
      )
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

const teacherLogin = (teacherData) => {
  // const sessionFields = JSON.parse(JSON.stringify(session));
  const promise = new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(
        teacherSignUpURL,
        teacherData, { headers },
      )
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

export {
  teacherRegistration,
  teacherLogin,
};
