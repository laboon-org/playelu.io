import React from 'react'
import '../../../scss/sale_page/notfound_modal.scss'

export default function NotfoundModal(props) {
    const { title, icon } = props
    return (
        <div className='notfound'>
            <img
                className='notfound__img'
                src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/notfound-icon.webp'
                alt=''
            />
            <div className='notfound__text'>
                <span className='notfound__title'>MetaMask not found</span>
                <span className='notfound__sub'>You need to set up MetaMask wallet to continue</span>
            </div>
            <div className='notfound__btn'>
                <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/button/button_modal.webp' alt='' />
                <div className='notfound__btn--content'>
                    <img
                        className='notfound__btn-icon'
                        src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/coinbase.png'
                        alt=''
                    />
                    <p className='notfound__btn-title'>
                        download {title}
                    </p>
                </div>

            </div>
        </div>
    )
}
