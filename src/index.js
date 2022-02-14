import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import DAppProvider
import {DAppProvider} from '@usedapp/core';
// import {Mainnet} from '@usedapp/core/modal/chain/ethereum';
// import { Mainnet } from "@usedapp/core/modal/chain/avalanche";

import App from './App';
import 'animate.css';

// const config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]:
//       'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
//   },
// };

ReactDOM.render(
    <React.StrictMode>
      {/*
        Wrap our app in the provider, config is required,
        but can be left as an empty object:
      */}
      <DAppProvider config={{}}>
        <App />
      </DAppProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
