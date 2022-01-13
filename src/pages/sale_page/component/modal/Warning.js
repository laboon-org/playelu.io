import React from 'react'
import './_modal.scss'

export default function Warning() {
    return (
        <div className='warning'>
            <div className='warning__frame'>
                <img src='' alt='' />
                <div className='warning__text'>
                    <span></span>
                </div>
                <div className='warning__btn'>
                    <span>ok</span>
                </div>
            </div>
        </div>
    )
}
