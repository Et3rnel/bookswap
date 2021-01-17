import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';
import BarProvider from './context/barContext';

ReactDOM.render(
  <React.StrictMode>
    <BarProvider>
      <Popup />
    </BarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);