import React from 'react'

export default function WhiteListComingSoon() {
    return (
        <div className='contribute'>
            <span className='contribute--shadow'></span>
            <div className='contribute-frame'>
                <div className='modal-succeed'>
                    <div className='modal-succeed__body modal-comingSoon__body'>
                        <img
                            className='modal-succeed__body__img'
                            src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/comingsoon.webp'
                            alt=''
                        />

                        <div className='modal-succeed__body__content modal-comingSoon__content'>
                            <p className='modal-succeed__content--title'>
                                Coming Soon!
                            </p>
                            <span className='modal-succeed__content--sub'>
                                We’ll open the sale page soon, please wait! Thanks
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
