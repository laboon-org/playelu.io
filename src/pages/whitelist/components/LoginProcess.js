import React from 'react';
// import MetaMaskOnboarding from '@metamask/onboarding';

import detectEthereumProvider from '@metamask/detect-provider';
import wallet from '../../../util/wallet';
import messageStorage from '../../../util/messageStorage';

// Avalanche Network information for automatic onboarding in MetaMask
// const AVALANCHE_MAINNET_PARAMS = {
//   chainId: '0xA86A',
//   chainName: 'Avalanche Mainnet C-Chain',
//   nativeCurrency: {
//     name: 'Avalanche',
//     symbol: 'AVAX',
//     decimals: 18,
//   },
//   rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
//   blockExplorerUrls: ['https://snowtrace.io/'],
// };
// const AVALANCHE_TESTNET_PARAMS = {
//   chainId: '0xA869',
//   chainName: 'Avalanche Testnet C-Chain',
//   nativeCurrency: {
//     name: 'Avalanche',
//     symbol: 'AVAX',
//     decimals: 18,
//   },
//   rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
//   blockExplorerUrls: ['https://testnet.snowtrace.io/'],
// };

// // This code uses the Avalanche Test Network. If you want to use the main network, simply
// // change this to AVALANCHE_MAINNET_PARAMS
// const AVALANCHE_NETWORK_PARAMS = AVALANCHE_TESTNET_PARAMS;

// // Check if the chain id is the selected Avalanche chain id
// const isAvalancheChain = (chainId) => (
//   chainId &&
//   chainId.toLowerCase() === AVALANCHE_NETWORK_PARAMS.chainId.toLowerCase()
// );

// function isMobileDevice() {
//   return 'ontouchstart' in window || 'onmsgesturechange' in window;
// }

export default function LoginProcess(props) {
  // const initialState = {};
  // const {walletState, setWalletState} = React.useState(initialState);

  const {
    showWhiteList, // * Show white list
    showModalNotFound,
  } = props;

  const iconMetaMask = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp';
  // const iconCoin98 = 'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/icon_coin98.png';

  //* Function

  const connectWalletWeb3MetaMask = async (wallet_name) => {
    // * Check if wallet is connected or not, name is MetaMask
    const provider = await detectEthereumProvider();
    // console.log(provider);

    if (provider) {
      // console.log('Ethereum successfully detected!');

      // From now on, this should always be true:
      // provider === window.ethereum

      // Access the decentralized web!

      // Legacy providers may only have ethereum.sendAsync
      // const chainId = await provider.request({
      //   method: 'eth_chainId',
      // });
      // console.log(chainId);

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
  // const connectWalletWeb3Coin98 = async (wallet_name) => {
  //   // * Check if wallet is connected or not, name is MetaMask
  //   const provider = await detectEthereumProvider();
  //   console.log(provider);

  //   if (provider) {
  //     console.log('Ethereum successfully detected!');

  //     // From now on, this should always be true:
  //     // provider === window.ethereum

  //     // Access the decentralized web!

  //     // Legacy providers may only have ethereum.sendAsync
  //     const chainId = await provider.request({
  //       method: 'eth_chainId',
  //     });
  //     console.log(chainId);

  //     //* Listeners
  //     provider.on('accountsChanged', (accounts) => {
  //       window.location.reload();
  //     });
  //     provider.on('chainChanged', (chainId) => {
  //       window.location.reload();
  //     });

  //     //* setProvider, getAccount
  //     const account = await provider.request({method: 'eth_requestAccounts'});
  //     console.log(account);

  //     wallet.getInstance().setAddress(account[0]);
  //     wallet.getInstance().setWallet(wallet_name);

  //     return {
  //       isValid: true,
  //     };
  //   } else {
  //     // if the provider is not detected, detectEthereumProvider resolves to null
  //     console.error('Please install MetaMask!');
  //     return {
  //       isValid: false,
  //       message: 'TEST',
  //     };
  //   }
  // };

  const connectWallet = async (wallet_name) => {
    switch (wallet_name) {
      case 'metamask': {
        if (window.ethereum && window.ethereum.isMetaMask) {
          console.log('MetaMask Extension is installed!');
          const result = await connectWalletWeb3MetaMask(wallet_name);
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
      // case 'coin98': {
      //   if (window.coin98 && window.ethereum && window.ethereum?.isCoin98) {
      //     console.log('Coin98 Extension is installed!');
      //     const result = await connectWalletWeb3Coin98(wallet_name);
      //     if (result.isValid) {
      //       showWhiteList();
      //     } else {
      //       messageStorage.getInstance().setMessage('NotFoundModal', 'coin98');
      //       showModalNotFound();
      //     }
      //   } else {
      //     messageStorage.getInstance().setMessage('NotFoundModal', 'coin98');
      //     showModalNotFound();
      //   }
      //   break;
      // }
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
      {/* <Web3Connector
        wallet_name="coin98"
        icon={iconCoin98}
        title="Login with Coin98"
      /> */}
    </div>
  );
}
