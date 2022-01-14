import React from 'react'
import message from '../../../module/messageStorage'

import '../../../scss/sale_page/notfound_modal.scss'

const defineConstant = {
    metamask: {
        name: 'MetaMask',
        icon:'https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp'
    }
}

export default function NotfoundModal(props) {

    const name=defineConstant[message.getInstance().getMessage('NotFoundModal')].name
    const icon=defineConstant[message.getInstance().getMessage('NotFoundModal')].icon
    return (
        <div className='notfound'>
            <img
                className='notfound__img'
                src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/notfound-icon.webp'
                alt=''
            />
            <div className='notfound__text'>
                <span
                    className='notfound__title'
                >{name} not found
                </span>
                <span
                    className='notfound__sub'
                >You need to set up {name} wallet to continue
                </span>
            </div>
            <div className='notfound__btn'>
                <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/button/button_modal.webp' alt='' />
                <div className='notfound__btn--content'>
                    <img
                        className='notfound__btn-icon'
                        src={icon}
                        alt=''
                    />
                    <p className='notfound__btn-title'>
                       Download {name}
                    </p>
                </div>

            </div>
        </div>
    )
}
