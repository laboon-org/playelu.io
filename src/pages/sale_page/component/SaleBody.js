import React, { useState, useCallback } from 'react'
import BodyRight from './bodyRight'
import Logo from './logo'
import NotfoundModal from './modal/NotFoundModal'

export default function SaleBody(props) {
    const { changeStateWarning } = props
    const [notfound, setNotfound] = useState(false)
    const showModalNotFound = useCallback(() => {
        setNotfound(true)
    })

    return (
        <div className='sale-body'>
            {
                !notfound ? (
                    <>
                        <Logo />
                        <BodyRight
                            changeStateWarning={changeStateWarning}
                            showModalNotFound={showModalNotFound}
                        />
                    </>
                ) : <NotfoundModal />
            }
        </div>
    )
}
