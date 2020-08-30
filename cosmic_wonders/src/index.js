import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import {ConfigureStore} from './redux/configureStore'
import {Provider} from 'react-redux';
import App from './App'

const store=ConfigureStore();

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
 , document.getElementById('root')
)
