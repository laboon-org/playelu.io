import Web3 from 'web3';
import message from '../constant/message';
import language from './language';
import detectEthereumProvider from '@metamask/detect-provider'

const wallet_support = {
    metamask: true,
    coinbase: true
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
                const provider = await detectEthereumProvider();
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

                const web3 = new Web3(Web3.givenProvider);
                //console.log(web3.eth.metamask)
                //const network = await web3.eth.net.getNetworkType();
                console.log("PROVIDER:",web3.eth.currentProvider)
                await new Promise(async (resolve)=>{
                    web3.eth.getCoinbase((error,address)=>{
                        if(error){
                            throw error
                        }
                        this.account=address
                        console.log('DDIAJ CHI:',address)
                        resolve(address)
                    })
                }).catch(err=>{
                    console.log(err)
                })
              
                // const accounts = (await web3.eth.requestAccounts());
               
                // this.account = accounts[0]

                return {
                    isValid: true
                }
                break;
            }
            default: {

            }
        }
    }
}

export default wallet