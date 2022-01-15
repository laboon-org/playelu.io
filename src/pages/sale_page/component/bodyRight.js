import React, { useState, useCallback } from 'react'
import Contribute from './contribute/contribute'
import Login from './Login'
import ModalInProcessing from './modal/ModalProcessing'
// import url from '../constant/url'

import wallet from '../../../module/wallet'
import Connector from './Connector'
import ModalNotification from './modal/ModalNotification'


export default function BodyRight(props) {

    //* Props
    const { showModalNotFound, changeStateWarning } = props

    //* State
    const [contributeShow, setContributeShow] = useState(false)
    const [contributeData, setContributeData] = useState({})
    const [modalProcessing, setModalProcessing] = useState(false)
    const [modalNotificationState, setModalNotificationState] = useState(false)

    //* Function callback
    const onPressShow = useCallback((data) => {
        setContributeData(data)
        setContributeShow(true)
    }, [])

    const onShowModalProcessing = useCallback((bool) => {
        setModalProcessing(bool)
    }, [])


    const showModalNotification = () => {
        setModalNotificationState(true)
    }


    //* Conponent 
    const LoginProcess = () => {
        return (
            !modalNotificationState
                ?
                <Connector
                    showContributeForm={(data) => {
                        onPressShow(data)
                    }}
                    showModalNotFound={showModalNotFound}
                    showModalFailed={(message) => {
                        //* Show failure when login
                        // onShowModal()
                    }}
                    showModalNotification={showModalNotification}
                    changeStateWarning={changeStateWarning}
                />
                : <div className='body-right'>
                    <ModalNotification forwardBack={
                        ()=>{
                            setModalNotificationState(false)
                        }
                    }/>
                </div>
        )
    }

    return (
        <React.Fragment>
            {
                !contributeShow
                    ?
                    <LoginProcess />
                    :
                    <div className='body-right'>
                        <span className='body-right__title'>
                            WALLET SELECTION
                        </span>
                        <Contribute
                            data={contributeData}
                            showLoading={(bool) => {
                                onShowModalProcessing(bool)
                            }}
                        />
                    </div>
            }
            {
                modalProcessing
                    ?
                    <ModalInProcessing />
                    :
                    <></>
            }
        </React.Fragment>
    )
}
