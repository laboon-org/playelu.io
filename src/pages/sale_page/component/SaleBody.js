import React, { useState, useCallback } from 'react'
import BodyRight from './bodyRight'
import Logo from './logo'
import NotfoundModal from './notfoundModal'

export default function SaleBody() {
    const [notfound, setNotfound] = useState(false)
    const onShowNotfound = useCallback(() => {
        setNotfound(true)
    })
    return (
        <div className='sale-body'>
            {
                !notfound ? (<>
                    <Logo />
                    <BodyRight onShowNotfound={onShowNotfound} />
                </>) : <NotfoundModal title='download....' />
            }
        </div>
    )
}
