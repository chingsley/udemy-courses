import React from 'react';
import dotenv from 'dotenv';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppWithContext';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
