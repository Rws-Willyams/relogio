import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App texto={{chamada:'A danki é boa',chamada2:'Danki Code'}} />
  </React.StrictMode>
);
