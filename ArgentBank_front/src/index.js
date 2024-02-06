import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.js'
import { Provider } from 'react-redux';
import store from './Redux/Store.jsx';
import reportWebVitals from './reportWebVitals';
 
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
);

reportWebVitals();
