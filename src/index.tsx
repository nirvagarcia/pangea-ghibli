import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.ts';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

reportWebVitals();