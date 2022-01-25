import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redax/redux-store";
import { Provider } from 'react-redux';





  ReactDOM.render(

    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </Provider>

    , document.getElementById('root')
  );


reportWebVitals();