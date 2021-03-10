import axios from 'axios';
import log from 'loglevel';
import { toggleSnackbar } from '../store/actions/auth';
// import {
//   VERIFY_OTP_URL,
//   GENERATE_OTP_URL,
//   BULK_UPLOAD_URL,
// } from '../utils/constants';

export default {
  setupInterceptors: (store) => {
    log.debug(`Store is ${store}`);
    axios.interceptors.request.use((req) => {
      // const unAuthenticatedRoutes = [GENERATE_OTP_URL, VERIFY_OTP_URL];
      log.debug(`URL before request is ${req.url}`);
      // if (!unAuthenticatedRoutes.includes(req.url)) {
      //   const { token } = store.getState();
      //   if (token !== null) {
      //     req.headers.Authorization = `Bearer ${token}`;
      //     if (req.url !== BULK_UPLOAD_URL) {
      //       req.headers['Content-Type'] = 'application/json';
      //     } else {
      //       req.headers['Content-Type'] = 'multipart/form-data';
      //     }
      //   }
      // }
      return req;
    });

    axios.interceptors.response.use(
      (res) => {
        if (res.data) {
          log.debug('Response in interceptor is :', res.data);
          if (res.data && res.data.message) {
            store.dispatch(toggleSnackbar(true, res.data.message));
          }
        }
        return res;
      },
      (err) => {
        if (err && err.response) {
          // show error to snackbar
          if (err.response.data.error) {
            store.dispatch(toggleSnackbar(true, err.response.data.error));
          } else if (err.response.data.detail) {
            store.dispatch(toggleSnackbar(true, err.response.statusText));
            if (err.response.status === 401) {
              window.location.href = '/signin';
            }
          } else if (err && err.response.statusText) {
            store.dispatch(toggleSnackbar(true, err.response.statusText));
          }
        } else if (err && !err.response) {
          store.dispatch(toggleSnackbar(true, err.message));
        } else {
          return err;
        }

        return err;
      },
    );
  },
};
