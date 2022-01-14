import React, { useState, useCallback } from 'react'
import Contribute from './contribute/contribute'
import Login from './Login'
import ModalInProcessing from './modal/ModalProcessing'
// import url from '../constant/url'

import wallet from '../../../module/wallet'
import Connector from './Connector'

export default function BodyRight(props) {

    //* Props
    const { showModalNotFound, changeStateWarning } = props

    //* State
    const [contributeShow, setContributeShow] = useState(false)
    const [contributeData, setContributeData] = useState({})
    const [modalProcessing, setModalProcessing] = useState(false)

    //* Function callback
    const onPressShow = useCallback((data) => {
        setContributeData(data)
        setContributeShow(true)
    }, [])

    const onShowModalProcessing = useCallback((bool) => {
        setModalProcessing(bool)
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
                        showModalNotFound={showModalNotFound}
                        showModalFailed={(message) => {
                            //* Show failure when login
                            // onShowModal()
                        }}
                        changeStateWarning={changeStateWarning}
                    ></Connector>
                    :
                    <Contribute
                        data={contributeData}
                        showLoading={(bool) => {
                            onShowModalProcessing(bool)
                        }}
                    //onShowModal={onShowModal} 
                    />
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
