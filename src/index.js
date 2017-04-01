import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Page from './components/Page';
import store from './store'

import './styles/style.css';

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
