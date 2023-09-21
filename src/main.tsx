// external imports:
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// local imports:
import App from './App.tsx';
import Store from './store';
import './assets/fonts/fonts.css';
import './assets/main.scss';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
