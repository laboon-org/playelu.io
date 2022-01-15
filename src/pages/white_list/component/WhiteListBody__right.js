import React, { useState } from 'react'
import NotfoundModal from '../../sale_page/component/NotfoundModal'
import LoginProcess from './LoginProcess'
import WhiteList_Registration from './WhiteList_Registration'

export default function WhiteListBody__right() {
    const [whiteListShow, setWhiteListShow] = useState(false)
    const showWhiteList = () => {
        setWhiteListShow(true)
    }
    return (
        <div className='white-list__body--right'>
            {
                !whiteListShow ?
                    <LoginProcess
                        icon='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp'
                        title='Login with Metamask'
                        showWhiteList={showWhiteList}
                    /> :
                    <WhiteList_Registration />
            }
        </div>
    )
}
