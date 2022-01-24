import {WalletConnectConnector} from '@web3-react/walletconnect-connector';
import {WalletLinkConnector} from '@web3-react/walletlink-connector';
import setting from '../../../../constant/setting';


//* Wallet Connect
const walletConnect = new WalletConnectConnector({
  rpc: {1: setting.RPC_URLS.AVAX},
  supportedChainIds: [43114], // Only support avax
  qrcode: true,
});

//* Coin base
const walletLink = new WalletLinkConnector({
  url: setting.RPC_URLS.AVAX,
  appName: 'presales',
  supportedChainIds: [1, 43114, 3, 4, 5, 42, 10, 137, 69, 420, 80001],
});

/* eslint-disable */
export default {
    walletconnect: walletConnect,
    coinbase: walletLink
}

