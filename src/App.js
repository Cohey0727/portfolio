import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import store from './redux';
import axios from 'axios';

import './App.css';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

// axios.defaults.headers.common['Content-Type'] =
//   'application/x-www-form-urlencoded';

const myApi = axios.create({
  baseURL: 'https://www.gaitameonline.com/rateaj/getrate',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }
});
console.debug(myApi);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <button
              onClick={() =>
                store.dispatch({
                  type: 'APP/EXCHANGE/READ'
                })
              }
            />
            <button
              onClick={() => {
                myApi
                  .get()
                  .then((res) => {
                    console.debug(res);
                  })
                  .catch((res) => {
                    console.debug(res);
                  });
              }}
            />
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
