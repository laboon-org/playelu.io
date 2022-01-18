import React from 'react'
import '../../../sale_page/component/modal/_modal.scss'
import '../../../sale_page/component/modal/_responsive.scss'
export default function ModalSucceed(props) {
    const {
        forwardBack,
        amount,
        deposit,
        message
    } = props
    return (
        <div className='contribute'>
            <span className='contribute--shadow'></span>
            <div className='contribute-frame white-list_succceed__frame'>
                <div className='modal-succeed white-list__succeed'>
                    <img
                        className='modal-succeed__body__img'
                        src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/white-list/boon_wallet.webp'
                        alt=''
                    />

                    <div className='modal-succeed__body__content white-list__succeed__content'>
                        <span className='modal-succeed__heading white-list__succeed__heading'>
                            CONGRATULATION
                        </span>
                        <span className='white-list__succeed__sub'>You have successfully registered</span>
                        {/* {message == null ?
                            (
                                <>
                                    {`Congratulations on your successful purchase of ${amount}`}
                                    <span className='modal-succeed__body__content__boon'>$BOON</span>
                                    , for {deposit}
                                    <span className='modal-succeed__body__content__avax'>AVAX</span>
                                    , in the "Seed" round.
                                </>) : message} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
