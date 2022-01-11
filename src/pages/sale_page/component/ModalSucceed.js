import React from 'react'

export default function ModalSucceed() {

    return (
        <div className='modal-succeed'>
            <div className='modal-content'>
                <div className='modal-content__text'>
                    <span className='modal-heading'>
                        succeeded
                    </span>
                    <span className='modal-sub'>
                        Congratulations on your successful purchase of 10.000 $BOON, for 500 AVAX, in the "Seed" round.
                    </span>
                </div>
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
