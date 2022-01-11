import React from 'react'

export default function ModalFail() {
    return (
        <div className='modal-fail'>
            <span className='modal-succeed-heading'>
                failure
            </span>
            <div className='modal__sale-content'>
                <span className='modal__sale-sub'>
                    Error transaction. Please try again.
                </span>
                <img className='modal-succeed__img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp' />
            </div>
            <div className='modal-succeed-btn'>
                <span>Try Again</span>
            </div>
        </div>
    )
}
