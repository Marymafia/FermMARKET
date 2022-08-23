import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import storer from './redux/store';

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
