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
                        <p className=''>
                            Sorry, your address is not in white-list.
                        </p>
                        Please contact us via
                        <a
                            className='modal-notification__link'
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hi@playelu.io&su=SUBJECT&body=BODY"
                            target="_blank">
                            <span>
                                hi@playelu.io
                            </span>
                        </a>
                        to get more support.
                    </div>
                </div>
                <div
                    className='modal-notification__btn modal-succeed__btn'
                    onClick={() => {
                        forwardBack()
                    }}
                >
                    <span>back</span>
                </div>
            </div>
        </div>
    )
}
