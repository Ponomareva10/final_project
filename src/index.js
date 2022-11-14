import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store';
import './index.css';
import App from './App';
import 'swiper/css';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);