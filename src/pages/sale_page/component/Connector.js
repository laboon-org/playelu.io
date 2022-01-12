
import React, { useState, useCallback, useRef } from 'react'
import { useEagerConnect, useInactiveListener } from './hooks'
import { useWeb3React } from '@web3-react/core'
import setting from '../../../constant/setting'

import detectEthereumProvider from '@metamask/detect-provider'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import Spinner from './Spinner'

import connectorConst from './connector/connectorConst'
import wallet from '../../../module/wallet'







export default function Connector(props) {

    //* Props
    const { showContributeForm, showModalFailed } = props

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

    const connectMetaMask = async () => {
        const provider = await detectEthereumProvider({ mustBeMetaMask: true });
        if (provider) {
            //* set Provider
            //* getAccount
            const account = (await provider.request({ method: 'eth_requestAccounts' }));
            console.log(account)
            wallet.getInstance().setAddress(account[0])
            wallet.getInstance().setWallet('metamask')
            return {
                isValid: true
            }
        } else {
            return {
                isValid: false,
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
                                console.log("LOG HERE")
                                showContributeForm()
                            } else {
                                showModalFailed()
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