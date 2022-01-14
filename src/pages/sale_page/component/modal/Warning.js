import React, { useState } from 'react'
import './_modal.scss'
import './_responsive.scss'

export default function Warning() {
    const [showWarning, setShowWarning] = useState(true)
    const onHideWarning = () => {
        setShowWarning(false)
    }
    return (
        <React.Fragment>
            {
                showWarning ?
                    <div className='warning'>
                        <div className='warning__frame'>
                            <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/panel/warning-icon.png' alt='' />
                            <div className='warning__text'>
                                <span>The transaction does not support BSC (Binance Smart Chain) network currently</span>
                            </div>
                            <div className='warning__btn' onClick={onHideWarning}>
                                <span>ok</span>
                            </div>
                        </div>
                    </div> :
                    <></>
            }

        </React.Fragment>
    )
}
