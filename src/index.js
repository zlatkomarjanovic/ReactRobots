import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'; 
import App from './App'; 
import {Provider, connect} from 'react-redux'; 
import {createStore} from 'redux'; 
import { searchRobots } from './reducers';

const store = createStore(searchRobots) 

ReactDOM.render(
  <React.StrictMode>
    <App  store = {store}/> 
  </React.StrictMode>,
  document.getElementById('root')
);


