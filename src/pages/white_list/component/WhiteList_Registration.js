import React, { useState } from 'react'
import ModalSucceed from './modal/ModalSucceed'
import WhiteListComingSoon from './modal/WhiteList_comingSoon'
import wallet from '../../../module/wallet'
import {
    useSearchParams
} from "react-router-dom";
import axios from 'axios'



import '../../../scss/reponsiveness/sale_page/mobile.scss'

export default function WhiteList_Registration() {
    //*State
    const [amount, setAmount] = useState(('').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    const [modalSucceedShow, setModalSucceedShow] = useState(false)
    const showModalSucceed = () => {
        setModalSucceedShow(true)
    }

    const [searchParams, setSearchParams] = useSearchParams();

    const register = async () => {
        const boonValue = parseInt(amount.split('.').join(""));
        let id = searchParams.get("id")
        if (id == null || id == undefined) {
            id = -1
        }
        try {
            const URL = 'https://laboon.as.r.appspot.com/whitelist'
            const callRegister = await axios.post(URL, {
                address_wallet: wallet.getInstance().account,
                boon_amount: boonValue,
                [id == -1 ? null : 'ref_code']: id
            }).then(res => {
                return res.data
            }).catch(err => {
                throw err
            })
            console.log(callRegister)
            if (callRegister.status == 200) {
                showModalSucceed()
            } else {
                //* Never error
            }
        }
        catch (err) {

        }
    }

    return (<>
        {
            !modalSucceedShow ?
                <>
                    <div className='white-list__title'>
                        <span>WHITELIST: REGISTRATION</span>
                        <div className='white-list__subtitle'>
                            <span>Round:</span>
                            <span className='white-list__strategy'> Strategy (0.015$)</span>
                        </div>
                    </div>

                    <div className='contribute'>
                        <span className='contribute--shadow'></span>
                        <div className='contribute-frame'>
                            {/* <div> */}
                            <div className='contribute-sec'>
                                <div className='contribute-title'>
                                    <p>Wallet Address:</p>
                                    <span className='wallet-name'>MetaMask</span>
                                </div>
                                <div className='input'>
                                    <input
                                        className='input-text'
                                        type="text"
                                        name="name"
                                        value={wallet.getInstance().account}
                                        placeholder=''
                                    />
                                    <img className='input-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp' alt='' />
                                </div>
                            </div>
                            {/* Amount */}
                            <div className='contribute-sec'>
                                <div className='contribute-title'>
                                    <p>Contribution Amount</p>
                                    <span className='boon-quantity'>$BOON</span>
                                </div>
                                <div className='input'>
                                    <input
                                        className='input-text boon-quantity__input'
                                        type="text" name="name"
                                        placeholder='0.00'
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
                                    <p>Preparing Amount</p>
                                    <span className='avax-quantity'>AVAX</span>
                                </div>
                                <div className='input'>
                                    <input
                                        className='input-text'
                                        style={{
                                            color: '#B6B6B6'
                                        }}
                                        type="text"
                                        name="name"
                                        placeholder='0.00'
                                        readOnly={true}
                                    />
                                    <img className='input-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/avax1-icon.webp' alt='' />
                                </div>
                            </div>
                            <div
                                className='contribute-footer'
                            >
                                <div
                                    className='contribute-btn'
                                    //onClick={async () => await onPressContribute()}
                                    onClick={async () => {
                                        await register()
                                    }}
                                >
                                    <span>
                                        REGISTRATION
                                    </span>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div >

                    <span className='white-list__code'>*Code: 123456</span>
                </>
                :
                <WhiteListComingSoon />
            // <ModalSucceed message={'Thanks you! for register whitelist.'} />
        }
    </>
    )
}
