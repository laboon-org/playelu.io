import Web3 from 'web3';
import message from '../constant/message';
import language from './language';
import detectEthereumProvider from '@metamask/detect-provider'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import setting from '../constant/setting';


const wallet_support = {
    metamask: true,
    coinbase: true,
    walletConnect: true
}
class wallet {

    static instance = new wallet();

    provider = null
    wallet_name = ''
    account = null

    static getInstance() {
        return this.instance
    }
    setWallet(wallet_name) {

        if (wallet_name in wallet_support) {
            this.wallet_name = wallet_name
        }
    }
    async connectWallet() {
        switch (this.wallet_name) {
            case 'metamask': {
                const provider = await detectEthereumProvider({ mustBeMetaMask: true });
                if (provider) {
                    //* set Provider
                    this.provider = provider
                    //* getAccount
                    const account = (await provider.request({ method: 'eth_requestAccounts' }));
                    this.account = account[0]
                    return {
                        isValid: true
                    }
                } else {
                    return {
                        isValid: false,
                        message: message[language.getIn().getLang()].NO_WALLET
                    }
                }
                break;
            }
            case 'coinbase': {


                const coinBase = new WalletLinkConnector({
                    url: setting.RPC_URLS.AVAX,
                    appName: 'web3-react example',
                    supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001]
                })

                return {
                    isValid: true
                }
                break;
            }
            case 'walletConnect': {
                const walletconnect = new WalletConnectConnector({
                    rpc: { 1: setting.RPC_URLS.AVAX, },
                    qrcode: true
                })
                break
            }
            default: {

            }
        }
    }
}

export default wallet