import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store';
import App from './App';
import './index.css';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);