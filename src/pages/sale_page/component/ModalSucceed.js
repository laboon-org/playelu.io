import React from 'react'

export default function ModalSucceed() {

    return (
        <div className='modal-succeed'>
            <span className='modal-succeed-heading'>
                succeeded
            </span>
            <div className='modal__sale-content'>
                <span className='modal__sale-sub'>
                    Congratulations on your successful purchase of 10.000 $BOON, for 500 AVAX, in the "Seed" round.
                </span>
                <img className='modal-succeed__img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp' />
            </div>
            <a
                className='link-gameplay'
                href='https://playelu.io/gameplay'
                target="_blank"
                rel="noreferrer"
            >
                <span>
                    Link: https://playelu.io/gameplay#nest
                </span>
            </a>
            <div className='modal-succeed-btn'>
                <span>ok</span>
            </div>
        </div>
    )
}
