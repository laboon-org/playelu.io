import Header from './component/Header'
import SaleBody from './component/SaleBody'

import '../../scss/sale_page/style.scss'
import '../../scss/reponsiveness/sale_page/ipad.scss'
import '../../scss/reponsiveness/sale_page/mobile.scss'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
function getLibrary(provider){
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }
export default function SalePage() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <div className="sale">
                <Header />
                <SaleBody />
            </div>
        </Web3ReactProvider>
    );
}