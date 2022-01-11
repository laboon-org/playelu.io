import React, { useState, useCallback } from 'react'
import Contribute from './contribute/contribute'
import Login from './login'
import Modal from './Modal'
// import url from '../constant/url'

import ModalSucceed from './ModalSucceed'
import wallet from '../../../module/wallet'
import Connector from './Connector'

export default function BodyRight(props) {
    //* Context web3
    


    //* Props
    const { onShowNotfound } = props

    //* State
    const [contributeShow, setContributeShow] = useState(false)
    const [modal, setModal] = useState(false)

    //* Function callback
    const onPressShow = useCallback(() => {
        setContributeShow(true)
    }, [])

    const onShowModal = useCallback(() => {
        setModal(true)
    }, [])

    const connectWallet = async (wallet_name) => {
        //*Set wallet
        wallet.getInstance().setWallet(wallet_name)

        if (wallet.getInstance().account != null) {
            onPressShow()
            return
        }
        //*Connect wallet
        const connect = await wallet.getInstance().connectWallet()
        console.log(connect)
        if (!connect.isValid) {
            //* Nếu kết nối không thành công
            onShowNotfound()
        } else {
            onPressShow()
        }
    }

    return (
        <React.Fragment>
            {
                !contributeShow
                    ?
                    <div className='body-right'>
                        {/* Login with metamask */}
                        <Login
                            // icon={url.icon.metamask}
                            title='Login with MetaMask'
                            onPressShow={async () => await connectWallet('metamask')} />
                        {/* Login with truth wallet */}
                        <Login
                            // icon={url.icon.trust_wallet}
                            title='Login with CoinBase'
                            onPressShow={async () => await connectWallet('coinbase')} />
                        <Login
                            // icon={url.icon.trust_wallet}
                            title='Login with WalletConnect'
                            onPressShow={async () => await connectWallet('coinbase')} />
                        <Connector></Connector>    
                    </div>
                    :
                    <Contribute onShowModal={onShowModal} />
            }
            {
                modal
                    ?
                    <Modal />
                    :
                    <></>
            }
        </React.Fragment>
    )
}
