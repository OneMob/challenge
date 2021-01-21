import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import store from './store'
import App from "./components/App";

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppContainer />,
    document.body.appendChild(document.createElement('div'))
  )
})
