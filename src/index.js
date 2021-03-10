import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import log from 'loglevel';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/index';
import NetworkService from './services/network-service';

log.enableAll();

const store = createStore(rootReducer);

// Here is the guy where I set up the interceptors!
NetworkService.setupInterceptors(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
