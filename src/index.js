import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import './index.css';
import 'animate.css';

window.onload = function() {
  ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root'),
  );
};
