import React, { useState, useCallback } from 'react'
import Contribute from './contribute/contribute'
import Login from './Login'
import ModalInprocessing from './modal/ModalProcessing'
// import url from '../constant/url'

import wallet from '../../../module/wallet'
import Connector from './Connector'

export default function BodyRight(props) {

    //* Props
    const { onShowNotfound } = props

    //* State
    const [contributeShow, setContributeShow] = useState(false)
    const [modalProcessing, setModalProcessing] = useState(false)

    //* Function callback
    const onPressShow = useCallback(() => {
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
                        showContributeForm={() => {
                            onPressShow()
                        }}
                        showModalFailed={() => {
                            // onShowModal()
                        }}

                    ></Connector>
                    :
                    <Contribute
                        showLoading={() => {
                            onShowModalProcessing()
                        }}
                    //onShowModal={onShowModal} 
                    />
            }
            {
                modalProcessing
                    ?
                    <ModalInprocessing />
                    :
                    <></>
            }

        </React.Fragment>
    )
}
