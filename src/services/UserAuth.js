import axios from 'axios';
import { userLoginURL,userProfileURL } from './../utils/constants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const loginAuth = (loginData) => {
    const promise = new Promise((resolve, reject) => {
    var data = JSON.stringify(loginData);
    let config = {
        method: 'POST',
        url: userLoginURL,
        headers: {
            'Content-Type': 'application/json',
        },
        credentials:"same-origin",
        data : data
    };
    console.log(config)
    console.log(loginData)
    axios(config)
    .then((response) => {
        console.log('data after successful call is ', response);
        resolve(response);
        cookies.set('auth_token',response['data']['auth_token'])
        axios.get(userProfileURL, {
            headers: {
                'Authorization': "token "+cookies.get('auth_token')
            }
            }).then((res) => {
        console.log('data after successful call is ', res);
        localStorage.setItem('isAuth', true);
        localStorage.setItem('token', cookies.get('auth_token'));
        })
    })
    .catch((error) => {
        console.log(error.response);
        reject(error);
    });
    });
  return promise;
};


export {
  loginAuth
}