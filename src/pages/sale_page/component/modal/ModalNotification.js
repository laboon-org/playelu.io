import React from 'react'
import './_modal.scss'
import './_responsive.scss'
export default function ModalNotification(props) {
    const { forwardBack } = props
    return (
        <div className='modal-succeed'>
            <span className='modal-succeed__heading'>
                notification
            </span>
            <div className='modal-succeed__body'>
                <img
                    className='modal-succeed__body__img'
                    src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp'
                    alt=''
                />

                <div className='modal-succeed__body__content'>
                    Sorry, your address is not in white-list. Please contact us via hi@playelu.io to get more support.
                </div>
            </div>
            <div
                className='modal-succeed__btn'
                onClick={() => {
                    forwardBack()
                }}
            >
                <span>back</span>
            </div>
        </div>
    )
}
