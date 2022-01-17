import React, { useState } from 'react'
import LoginProcess from './LoginProcess'
import WhiteListRegistration from './WhiteList_Registration'

export default function WhiteListBody__right(props) {

    const { showModalNotFound } = props

    const [whiteListShow, setWhiteListShow] = useState(false)
    const showWhiteList = () => {
        setWhiteListShow(true)
    }
    return (
        <div className='white-list__body--right'>
            {
                !whiteListShow ?
                    <LoginProcess
                     
                        showWhiteList={showWhiteList}
                        showModalNotFound={showModalNotFound}
                    /> :
                    <WhiteListRegistration />
            }
        </div>
    )
}
