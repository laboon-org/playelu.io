import React, { useState, useCallback } from 'react'
import Logo from '../../sale_page/component/logo'
import NotfoundModal from '../../sale_page/component/NotfoundModal'
import ClaimBodyRight from './ClaimBody_right'

export default function ClaimBody(props) {
    const { changeStateWarning } = props
    const [notfound, setNotfound] = useState(false)
    const showModalNotFound = useCallback(() => {
        setNotfound(true)
    })

    return (
        <div className='claim-body'>
            {
                !notfound ? (
                    <>
                        <Logo />
                        <ClaimBodyRight />

                    </>
                ) : <NotfoundModal />
            }
        </div>
    )
}
