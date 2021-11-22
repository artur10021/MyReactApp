import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderTree } from './render';
import appState from './Redax/Redax'

rerenderTree(appState);

reportWebVitals();