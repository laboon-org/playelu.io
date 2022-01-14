
import React, { useState, useCallback, useRef } from 'react'
import axios from 'axios'
import { useEagerConnect, useInactiveListener } from './hooks'
import { useWeb3React } from '@web3-react/core'
import setting from '../../../constant/setting'
import detectEthereumProvider from '@metamask/detect-provider'
import connectorConst from './connector/connectorConst'
import wallet from '../../../module/wallet'
import messageStorage from '../../../module/messageStorage'
import message from '../../../constant/message'



export default function Connector(props) {

    //* Props
    const {
        showContributeForm,
        showModalNotFound, //* No metamask
        changeStateWarning //* Not Support chain id
    } = props

    const context = useWeb3React()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context
    const [activatingConnector, setActivatingConnector] = useState()
    const isFirst = useRef(true)

    if (isFirst.current) {
        isFirst.current = false
        if (deactivate) { deactivate() }
        if (connector) {
            connector.close()
        }
    }

    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    const triedEager = useEagerConnect()

    useInactiveListener(!triedEager || !!activatingConnector)

    const Login = (props) => {
        const { icon, title } = props
        return (
            <div className='login-frame'>
                <img
                    className='login-icon'
                    src={icon}
                    alt=''
                />
                <h4 className='login-title'>
                    {title}
                </h4>
            </div>)
    }

    const checkChainID = async (provider) => {
        const chainId = parseInt(await provider.request({ method: 'eth_chainId' }))
        if (chainId in setting.CHAIN_ID_SUPPORT) {
            return { isValid: true }
        } else {
            messageStorage.getInstance().setMessage('Warning', message.EN.WALLET.NOT_SUPPORT_CHAIN_ID)
            changeStateWarning(true)
            return { isVaild: false }
        }
    }
    const connectMetaMask = async () => {
        const provider = await detectEthereumProvider({ mustBeMetaMask: true });



        if (provider) {

            //* Listener
            provider.on('accountsChanged', (accounts) => {
                window.location.reload();
            });
            provider.on('chainChanged', (chainId) => {
                window.location.reload();
            });

            //* set Provider
            //* getAccount
            const account = (await provider.request({ method: 'eth_requestAccounts' }));

            //* Check chain support
            const checkChain = await checkChainID(provider)
            if (!checkChain.isValid) {
                return
            }

            wallet.getInstance().setAddress(account[0])
            wallet.getInstance().setWallet('metamask')

            return {
                isValid: true
            }
        } else {

            return {
                isValid: false,
                message: 'TEST'
            }
        }
    }
    const getFailureMessage = (messageCode) => {
        switch (messageCode) {
            case 'NO_ADDRESS': {
                return "Your Wallet Address isn't in WL"
            }
            default: {
                return 'Unable to identify error'
            }
        }
    }

    const checkWallet = async () => {
        try {
            const SHEET_NAME = '1.Seed'
            const URL = 'https://laboon.as.r.appspot.com/check_address'
            const checkWallet = await axios.post(URL, {
                "sheet_name": SHEET_NAME,
                "address_wallet": wallet.getInstance().account,
            }).then((res) => {
                return res.data
            }).catch(err => {
                throw err
            })

            if (checkWallet.status != 200) {
                return {
                    isValid: false,
                    message: getFailureMessage(checkWallet.message)
                }
            }
            return {
                isValid: true,
                content: checkWallet.content
            }
        }
        catch (err) {
            return {
                isValid: false,
                message: 'Unable to identify error'
            }
        }
    }

    const Web3Connector = (props) => {
        const { wallet_name, icon, title } = props
        return (
            <div
                className='login'
                onClick={async () => {
                    switch (wallet_name) {
                        case 'metamask': {
                            const result = await connectMetaMask()
                            if (result.isValid) {
                                const checkAddress = await checkWallet()
                                if (checkAddress.isValid) {
                                    //* If have address
                                    showContributeForm(checkAddress.content)
                                } else {
                                    //* Show message error when don't in WL
                                    //showModalFailed(checkAddress.message)
                                }
                                //* Go to
                            } else {
                                //* Input message
                                //* No metamask
                                //[Todo : Sáng]: Hoàn thiện phần set message cho 2 connector còn lại 
                                messageStorage.getInstance().setMessage('NotFoundModal', 'metamask')
                                showModalNotFound()
                            }
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }}
            >
                <Login
                    icon={icon}
                    title={title}
                />
            </div>
        )
    }

    const SetConnector = (props) => {
        const { wallet_name, icon, title } = props
        const currentConnector = connectorConst[wallet_name]

        //* Đang được kích hoạt
        const activating = currentConnector === activatingConnector

        //* Check connect
        const connected = currentConnector === connector

        return (
            <button
                className='login'
                onClick={() => {
                    setActivatingConnector(currentConnector)
                    activate(currentConnector)
                }}
            >
                <Login
                    icon={icon}
                    title={title}
                />
                {/* 
                [TODO: Dũng] convert lại CSS này ra một file nào đó
                */}
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        margin: '0 0 0 1rem'
                    }}
                >
                    {activating}
                    {connected && (() => {
                        wallet.getInstance().setAddress(account)
                        wallet.getInstance().setWallet(wallet_name)
                    })()}
                </div>
            </button >
        )
    }


    return (
        <div className='body-right'>
            <Web3Connector
                icon='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp'
                title='Login with Metamask'
                wallet_name='metamask'
            />

            {/* temp hide */}
            {/* <SetConnector
                icon='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/coinbase.png'
                title='Login with Coinbase'
                wallet_name='coinbase'
            />
            <SetConnector
                icon='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/wallet.png'
                title='Login with WalletConnect'
                wallet_name='walletconnect'
            /> */}
        </div >
    )
}