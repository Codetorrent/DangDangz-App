import React, { Component } from 'react';
import App from './src/App';
import store from './src/app/store';
import { Provider } from 'react-redux';




export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App/>
      </Provider>
    )
  }
}