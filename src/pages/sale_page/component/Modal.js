import React from 'react'

export default function Modal(props) {

    return (
        <div className='modal'>
            <div className='modal-frame'>
                <img
                    className='modal-img'
                    src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig-boon.webp'
                    alt=''
                />
                <span className='modal-title'>
                    in processing
                </span>
                <div className='loading-bar'>

                </div>
            </div>
        </div>
    )
}
