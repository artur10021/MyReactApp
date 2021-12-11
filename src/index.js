import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redax/Redax";



let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getAppState()} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

rerenderTree(store.getAppState());
store.subscribe(rerenderTree);

reportWebVitals();