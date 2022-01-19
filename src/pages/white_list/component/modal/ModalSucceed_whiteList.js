import React from 'react'
import '../../../sale_page/component/modal/_modal.scss'
import '../../../sale_page/component/modal/_responsive.scss'
export default function ModalSucceed(props) {
    const {
        type,
        message
    } = props

    //* Component

    const SucceedState = () => {
        return (
            <>
                <span className='modal-succeed__heading white-list__succeed__heading'>
                    CONGRATULATION
                </span>
                <span className='white-list__succeed__sub'>Thanks you! for register whitelist.</span>
            </>
        )
    }

    const SignedState = () => {
        return (
            <>
                <span className='modal-succeed__heading white-list__succeed__heading'>
                    Sorry !!!
                </span>
                <span
                    className='white-list__succeed__sub'>
                    Your wallet address was already inside registered white list. You’d like to update the info, please contact AGENCY to get more support (hi@playelu.io)
                </span>
            </>
        )
    }

    const ContentRender = () => {
        switch (type) {
            case 'SUCCEED': {
                return (
                    <SucceedState></SucceedState>
                )
            }
            case 'ALREADY_SIGNED': {
                return (
                    <SignedState></SignedState>
                )
            }
            default: {
                <></>
            }
        }
    }

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
                        <ContentRender />
                    </div>
                </div>
            </div>
        </div>
    )
}
