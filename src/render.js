import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./Redax/Redax"



export let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost = {addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  }
  

