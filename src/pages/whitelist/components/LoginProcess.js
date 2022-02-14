import React from 'react';
import { useEthers, useEtherBalance } from '@usedapp/core';

import wallet from '../../../util/wallet';
import messageStorage from '../../../util/messageStorage';

export default function LoginProcess(props) {
  const {
    showWhiteList, // * Show white list
    showModalNotFound,
  } = props;

  const iconMetaMask = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp';
  // const iconCoin98 = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png';

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
    const {wallet_name, icon, title} = props;
    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    function handleConnectWallet() {
      // console.log('handleConnectWallet');
      activateBrowserWallet();

      wallet.getInstance().setAddress(account);
      wallet.getInstance().setWallet(wallet_name);

      if (account) {
        showWhiteList();
      } else {
        messageStorage.getInstance().setMessage('NotFoundModal', 'metamask');
        showModalNotFound();
      }
    }

    return (
      <div className="login" onClick={() => handleConnectWallet()}>
        <Login icon={icon} title={title} />
        <div className="balance-info">
          {account && <p>Account: {account}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className="body-right">
      <span className="body-right__title">Wallet Selection</span>
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
}
