import React from 'react'

export default function Modal(props) {

    return (
        <div className='modal__sale'>
            <div className='modal__sale-frame'>
                <img
                    className='modal__sale-img'
                    src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig-boon.webp'
                    alt=''
                />
                <span className='modal__sale-title'>
                    in processing
                </span>
                <div className='loading-bar'>

                </div>
            </div>
        </div>
    )
}
