import React, { useState } from 'react'
import ModalSucceed from './modal/ModalSucceed'
import '../../../scss/reponsiveness/sale_page/mobile.scss'

export default function WhiteList_Registration() {
    //*State
    const [amount, setAmount] = useState(('').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    const [modalSucceedShow, setModalSucceedShow] = useState(false)
    const showModalSucceed = () => {
        setModalSucceedShow(true)
    }
    return (<>
        {
            !modalSucceedShow ?
                <div className='contribute'>
                    <span className='white-list__title'>WHITE LIST REGISTRATION</span>
                    <span className='contribute--shadow'></span>
                    <div className='contribute-frame'>
                        <div>
                            <div className='contribute-sec'>
                                <div className='contribute-title'>
                                    <p>Wallet Address:</p>
                                    <span className='wallet-name'>MetaMask</span>
                                </div>
                                <div className='input'>
                                    <input
                                        className='input-text'
                                        type="text" name="name"
                                        placeholder=''
                                    />
                                    <img className='input-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp' alt='' />
                                </div>
                            </div>
                            {/* Amount */}
                            <div className='contribute-sec'>
                                <div className='contribute-title'>
                                    <p>Amount:</p>
                                    <span className='boon-quantity'>$BOON</span>
                                </div>
                                <div className='input'>
                                    <input
                                        className='input-text'
                                        type="text" name="name"
                                        placeholder=''
                                        value={amount}
                                        onChange={(e) => {
                                            if (e.target.value == '') {
                                                setAmount('')
                                            }
                                            const reg = new RegExp('^[0-9]+$');
                                            if (reg.test(e.target.value.split('.').join(""))) {
                                                const amount = e.target.value.split('.').join("").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                                setAmount(amount)
                                            } else {

                                            }

                                        }}
                                    />
                                    <img className='input-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp' alt='' />
                                </div>
                            </div>
                            {/* Avax */}
                            <div className='contribute-sec'>
                                <div className='contribute-title'>
                                    <p>Deposit Estimation:</p>
                                </div>
                                <div className='input'>
                                    <input
                                        className='input-text'
                                        type="text" name="name"
                                        placeholder=''
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div
                                className='contribute-footer'
                            >
                                <div
                                    className='contribute-btn'
                                    //onClick={async () => await onPressContribute()}
                                    onClick={showModalSucceed}
                                >
                                    <span>
                                        CONTRIBUTE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                :
                <ModalSucceed />
        }



    </>
    )
}
