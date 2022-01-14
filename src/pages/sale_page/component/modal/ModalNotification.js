import React from 'react'
import './_modal.scss'
import './_responsive.scss'
export default function ModalNotification(props) {
    const { forwardBack } = props
    return (
        <div className='modal-notification contribute'>
            <span className='contribute--shadow'></span>
            <div className='modal-notification__frame'>
                <span className='modal-notification__heading modal-succeed__heading'>
                    notification
                </span>
                <div className='modal-succeed__body'>
                    <img
                        className='modal-succeed__body__img'
                        src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp'
                        alt=''
                    />

                    <div className='modal-notification__content modal-succeed__body__content__text'>
                        Sorry, your address is not in white-list. Please contact us via
                        <span className=''>
                            hi@playelu.io
                        </span>
                        to get more support.
                    </div>
                </div>
                <div
                    className='modal-notification__btn modal-succeed__btn'
                    onClick={() => {

                    }}
                >
                    <span>back</span>
                </div>
            </div>
        </div>
    )
}
