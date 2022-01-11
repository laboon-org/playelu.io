import React, { useState, useCallback } from 'react'
// import url from '../../constant/url'
import axios from 'axios'
import ModalSucceed from '../ModalSucceed'
import wallet from '../../../../module/wallet'


export default function Contribute(props) {
    const { onShowModal } = props
    const [amount, setAmount] = useState("")
    const [deposit, setDeposit] = useState("")
    const [infoState, setInfoState] = useState(false)
    const [infoValue, setInfoValue] = useState("")
    const [contribute, setContribute] = useState(true)

    const setValueDeposit = (amount) => {

        const boonValueUSD = 0.01; //?
        const avaxValueUSD = 89.28;//?
        const calAvaxAmount = (boonAmount) => {
            const USD = boonAmount * boonValueUSD
            return USD / avaxValueUSD
        }

        const boonAmount = parseInt(amount.split(',').join(''))
        const avaxAmount = (Math.round(calAvaxAmount(boonAmount) * 1000) / 1000) + ''
        setDeposit(avaxAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
    }

    const onPressContribute = async () => {
        //*Check Wallet Condition 
        const SHEET_NAME = '1.Seed'
        const PAYMENT_METHOD = 'AVAX'
        let transaction_status = false
        //[TODO]: contribute action

        setInfoState(true)
    }

    return (
        <div className='contribute'>
            {
                !contribute ?
                    <div className='contribute-frame'>
                        {/* Address wallet */}
                        <div className='contribute-sec'>
                            <div className='contribute-title'>
                                <p>Wallet Address:</p>
                                <span>MetaMask</span>
                            </div>
                            <div className='input'>
                                <input
                                    className='input-text'
                                    type="text" name="name"
                                    placeholder=''
                                    value={wallet.getInstance().account}
                                    readOnly={true}
                                />
                                {/* <img className='input-img' src={url.icon.metamask} alt='' /> */}
                            </div>
                        </div>
                        {/* Amount */}
                        <div className='contribute-sec'>
                            <div className='contribute-title'>
                                <p>Amount:</p>
                                <span>$BOON</span>
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
                                            setDeposit('')
                                        }
                                        const reg = new RegExp('^[0-9]+$');
                                        if (reg.test(e.target.value.split(',').join(""))) {
                                            const amount = e.target.value.split(',').join("").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                                            setAmount(amount)
                                            setValueDeposit(amount)
                                        } else {

                                        }

                                    }}
                                />
                                {/* <img className='input-img' src={url.icon.boon} alt='' /> */}
                            </div>
                        </div>
                        {/* Avax */}
                        <div className='contribute-sec'>
                            <div className='contribute-title'>
                                <p>Deposit Estimation:</p>
                                <span>AVAX</span>
                            </div>
                            <div className='input'>
                                <input
                                    className='input-text'
                                    type="text" name="name"
                                    placeholder=''
                                    readOnly={true}
                                    value={deposit}
                                />
                                {/* <img className='input-img' src={url.icon.avax} alt='' /> */}
                            </div>
                        </div>

                        <div
                            className='contribute-footer'
                        >

                            {/* contribute-information */}
                            {/* <div className='contribute-information'>
                        {infoState && <span className='information'>
                            Congratulations on your successful purchase of 10000 $BOON, for 500 AVAX, in the "Seed" round.
                        </span>}
                        <a
                            className='link-playelu'
                            href='https://playelu.io/gameplay#nest'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>
                                Link: https://playelu.io/gameplay#nest
                            </span>

                        </a>
                    </div> */}

                            <div
                                className='contribute-btn'
                                //onClick={async () => await onPressContribute()}
                                onClick={onShowModal}
                            >
                                <span>
                                    CONTRIBUTE
                                </span>
                            </div>
                        </div>
                    </div> :
                    <ModalSucceed />
            }

        </div>
    )
}
