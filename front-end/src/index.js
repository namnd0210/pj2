import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import rootReducer from './reducers';
require('dotenv').config()
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


