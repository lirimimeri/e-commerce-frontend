// Core-React modules.
import React from 'react';
import ReactDOM from 'react-dom';

// Third party packages.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

//Local files imports.
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import rootReducer from './store/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
