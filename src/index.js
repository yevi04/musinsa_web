import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './script/App';

const rootComponent = document.getElementById('root');
const main = ReactDOM.createRoot(rootComponent);
main.render(
  <App />
);
