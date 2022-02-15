import React from 'react';
import {useEthers, useEtherBalance} from '@usedapp/core';

import styles from './ErrorBoundary.module.scss';

import Error from '../../../components/error/Error';

import wallet from "../../../stores/wallet";
import messageStorage from "../../../stores/messageStorage";
import addAvalancheNetwork from '../../../utilities/injectAvalancheNetwork';

import {Web3ReactProvider} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

export default function WalletSelection(props) {
  const {hasError, setHasError} = React.useState(true);
  const {
    showWhiteList, // * Show white list
    showModalNotFound,
  } = props;

  const iconMetaMask =
    'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp';
  // const iconCoin98 = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png';

  // static getDerivedStateFromError() {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true }
  // };

  //* Component
  const Login = (props) => {
    const {icon, title} = props;
    return (
      <div className="login-frame">
        <img className="login-icon" src={icon} alt="" />
        <span className="white-list__login login-title">{title}</span>
      </div>
    );
  };

  const ConnectButton = (props) => {
    const { wallet_name, icon, title } = props;
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    function handleConnectWallet() {
      console.log('handleConnectWallet');

      // let { activateBrowserWallet, account } = useEthers();

      // addAvalancheNetwork('main');
      activateBrowserWallet();

      wallet.getInstance().setAddress(account);
      wallet.getInstance().setWallet(wallet_name);

      if (account) {
        showWhiteList();
      } else {
        // messageStorage.getInstance().setMessage('NotFoundModal', 'metamask');
        // showModalNotFound();
      }
    }

    return (
      <div className="login" onClick={() => handleConnectWallet()}>
        <Login icon={icon} title={title} />
        {/* <div className="balance-info">
          {account && <p>Account: {account}</p>}
        </div> */}
      </div>
    );
  };

  const renderConnectButtons = (props) => {
    // const networks = ['local', 'test', 'main'];

    return (
      <div>
        <ConnectButton
          wallet_name="metamask"
          icon={iconMetaMask}
          title="Login with MetaMask"
        />
        {/* <Web3Connector
        wallet_name="coin98"
        icon={iconCoin98}
        title="Login with Coin98"
      /> */}
      </div>
    );
  };

  return (
    <div className="body-right">
      <span className="body-right__title">Wallet Selection</span>
      {hasError && (
        <div className={styles.boundary}>
          <Error />
        </div>
      )}
      <Web3ReactProvider getLibrary={getLibrary}>
        {renderConnectButtons()}
      </Web3ReactProvider>
    </div>
  );
}
