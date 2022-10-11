import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";

import './index.css';

import App from './App';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <MoralisProvider
      appId="2VJA54mJp4bsKSpS2JJXxSBq15xjpNXCVEFGdI9s"
      serverUrl="https://b93ubroafjyx.usemoralis.com:2053/server"
      initializeOnMount={true}
    > */}
      <App />
    {/* </MoralisProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
