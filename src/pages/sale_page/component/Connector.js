
import React, { useState, useCallback } from 'react'
import { useEagerConnect, useInactiveListener } from './hooks'
import { useWeb3React } from '@web3-react/core'
import setting from '../../../constant/setting'

import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import Spinner from './Spinner'


export default function Connector() {
    const context = useWeb3React()
    const { connector, library, chainId, account, activate, deactivate, active, error } = context
    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState()

    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)
    const currentConnector = new WalletConnectConnector({
        rpc: { 1: setting.RPC_URLS.AVAX, },
        qrcode: true
    })
    const activating = currentConnector === activatingConnector
    const connected = currentConnector === connector
    //* State of button
    const disabled = !triedEager || !!activatingConnector || connected || !!error

    return (
        <div style={{ flexDirection: 'column', display: 'flex' }}>
            <button
                style={{
                    height: '3rem',
                    borderRadius: '1rem',
                    borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
                    cursor: disabled ? 'unset' : 'pointer',
                    position: 'relative'
                }}
                disabled={disabled}
                key={'WalletConnect'}
                onClick={() => {
                    setActivatingConnector(currentConnector)
                    activate(currentConnector)
                    console.log('ACC', account)
                }}
            >

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
                    {activating && <Spinner color={'black'} style={{ height: '25%', marginLeft: '-1rem' }} />}
                    {/* {connected && (
                        <span role="img" aria-label="check">
                            ✅
                        </span>
                    )} */}
                </div>
                Click here
            </button>
            <button onClick={() => {
                console.log('ACC', account)
            }}>
                test
            </button>
        </div>

    )
}