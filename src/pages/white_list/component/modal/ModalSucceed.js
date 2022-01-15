import React from 'react'
import '../../../sale_page/component/modal/_modal.scss'
import '../../../sale_page/component/modal/_responsive.scss'
export default function ModalSucceed(props) {
    const {
        forwardBack,
        amount,
        deposit
    } = props
    return (
        <div className='contribute'>
            <span className='contribute--shadow'></span>
            <div className='contribute-frame'>
                <div className='modal-succeed'>
                    <span className='modal-succeed__heading'>
                        succeeded!
                    </span>
                    <div className='modal-succeed__body'>
                        <img
                            className='modal-succeed__body__img'
                            src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp'
                            alt=''
                        />

                        <div className='modal-succeed__body__content'>
                            Congratulations on your successful purchase of {amount}
                            <span className='modal-succeed__body__content__boon'>$BOON</span>
                            , for {deposit}
                            <span className='modal-succeed__body__content__avax'>AVAX</span>
                            , in the "Seed" round.
                        </div>
                    </div>
                    <a
                        className='modal_succeed__link-gameplay'
                        href='https://playelu.io/gameplay'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>
                            Link: https://playelu.io/gameplay#nest
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
