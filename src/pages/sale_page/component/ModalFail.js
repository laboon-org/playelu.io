import React from 'react'

export default function ModalFail() {
    return (
        <div className='modal-fail'>
            <span className='modal-succeed-heading'>
                failed
            </span>
            <div className='modal__sale-content'>
                <img className='modal-succeed__img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp' />
                <span className='modal__sale-sub'>
                    Transaction error. Please try again.
                </span>
            </div>
            <div className='modal-succeed-btn'>
                <span>Try Again</span>
            </div>
        </div>
    )
}
