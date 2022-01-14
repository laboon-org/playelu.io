import React, { useState, useCallback } from 'react'
import Contribute from './contribute/contribute'
import Login from './Login'
import ModalInProcessing from './modal/ModalProcessing'
// import url from '../constant/url'

import wallet from '../../../module/wallet'
import Connector from './Connector'

export default function BodyRight(props) {

    //* Props
    const { onShowNotfound } = props

    //* State
    const [contributeShow, setContributeShow] = useState(false)
    const [contributeData, setContributeData] = useState({})
    const [modalProcessing, setModalProcessing] = useState(false)

    //* Function callback
    const onPressShow = useCallback((data) => {
        setContributeData(data)
        setContributeShow(true)
    }, [])

    const onShowModalProcessing = useCallback(() => {
        setModalProcessing(!modalProcessing)
    }, [])

    return (
        <React.Fragment>
            {
                !contributeShow
                    ?
                    <Connector
                        showContributeForm={(data) => {
                            onPressShow(data)
                        }}
                        showModalFailed={(message) => {
                            //* Show failure when login
                            // onShowModal()
                        }}
                    ></Connector>
                    :
                    <div className='body-right'>
                        <span className='body-right__title'>
                            WALLET SELECTION
                        </span>
                        <Contribute
                            data={contributeData}
                            showLoading={() => {
                                onShowModalProcessing()
                            }}
                        //onShowModal={onShowModal} 
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
