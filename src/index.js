import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import StateBlock from './StateBlock';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StateBlock />
  </React.StrictMode>
);


reportWebVitals();
