import React from 'react';

import detectEthereumProvider from '@metamask/detect-provider';
import wallet from '../../../util/wallet';
import messageStorage from '../../../util/messageStorage';

function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

export default function LoginProcess(props) {
  const {
    showWhiteList, // * Show white list
    showModalNotFound,
  } = props;

  const iconMetaMask = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp';
  const iconCoin98 = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png';

  //* Function
  const connectWalletWeb3 = async (wallet_name) => {
    // * Check if wallet is connected or not, name is MetaMask
    const provider = await detectEthereumProvider();
    console.log(provider);

    if (provider) {
      console.log('Ethereum successfully detected!');

      // From now on, this should always be true:
      // provider === window.ethereum

      // Access the decentralized web!

      // Legacy providers may only have ethereum.sendAsync
      const chainId = await provider.request({
        method: 'eth_chainId',
      });
      console.log(chainId);

      //* Listeners
      provider.on('accountsChanged', (accounts) => {
        window.location.reload();
      });
      provider.on('chainChanged', (chainId) => {
        window.location.reload();
      });

      //* setProvider, getAccount
      const account = await provider.request({method: 'eth_requestAccounts'});
      console.log(account);

      wallet.getInstance().setAddress(account[0]);
      wallet.getInstance().setWallet(wallet_name);

      return {
        isValid: true,
      };
    } else {
      // if the provider is not detected, detectEthereumProvider resolves to null
      console.error('Please install MetaMask!');
      return {
        isValid: false,
        message: 'TEST',
      };
    }
  };

  const connectWallet = async (wallet_name) => {
    switch (wallet_name) {
      case 'metamask': {
        console.log(wallet_name);
        if (window.ethereum && window.ethereum.isMetaMask) {
          const result = await connectWalletWeb3(wallet_name);
          if (result.isValid) {
            showWhiteList();
          } else {
            messageStorage.getInstance().setMessage('NotFoundModal', 'metamask');
            showModalNotFound();
          }
        } else {
          messageStorage.getInstance().setMessage('NotFoundModal', 'metamask');
          showModalNotFound();
        }
        break;
      }
      case 'coin98': {
        console.log(wallet_name);
        if (window.coin98 && window.ethereum && window.ethereum?.isCoin98) {
          const result = await connectWalletWeb3(wallet_name);
          if (result.isValid) {
            showWhiteList();
          } else {
            messageStorage.getInstance().setMessage('NotFoundModal', 'coin98');
            showModalNotFound();
          }
        } else {
          messageStorage.getInstance().setMessage('NotFoundModal', 'coin98');
          showModalNotFound();
        }
        break;
      }
      default: {
        break;
      }
    }
  };

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

  const Web3Connector = (props) => {
    const {wallet_name, icon, title} = props;
    return (
      <div
        className="login"
        onClick={async () => {
          await connectWallet(wallet_name);
        }}
      >
        <Login icon={icon} title={title} />
      </div>
    );
  };

  return (
    <div className="body-right">
      <span className="body-right__title">Wallet Selection</span>
      <Web3Connector
        wallet_name="metamask"
        icon={iconMetaMask}
        title="Login with MetaMask"
      />
      <Web3Connector
        wallet_name="coin98"
        icon={iconCoin98}
        title="Login with Coin98"
      />
    </div>
  );
}
