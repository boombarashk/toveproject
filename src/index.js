import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import router from './Routes';
import {store} from './store/store'
import './sass/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
      <RouterProvider router={router} />
  </Provider>
);
