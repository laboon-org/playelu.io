import React, { useState, useCallback } from 'react'
// import url from '../../constant/url'
import axios from 'axios'
import wallet from '../../../../module/wallet'
import ModalFail from '../modal/ModalFail'
import NotfoundModal from '../notfoundModal'
import ModalSucceed from '../modal/ModalSucceed'



export default function Contribute(props) {
    const { onShowModal } = props
    //*State
    const [amount, setAmount] = useState("")
    const [deposit, setDeposit] = useState("")
    const [infoState, setInfoState] = useState(false)
    const [infoValue, setInfoValue] = useState("")
    //* Show form contribute or message
    const [contribute, setContribute] = useState(false)
    const [succeed, setSucceed] = useState(false)

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
    const TransactionResult = (result) => {
        if (result) {
            return (<ModalSucceed />)
        } else {
            return (<ModalFail />)
        }
    }


    return (
        <div className='contribute'>
            {
                contribute ?
                    <div className='contribute-frame'>
                        {
                            !succeed ?
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
                                                value={wallet.getInstance().account}
                                                readOnly={true}
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
                                            <img className='input-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp' alt='' />
                                        </div>
                                    </div>
                                    {/* Avax */}
                                    <div className='contribute-sec'>
                                        <div className='contribute-title'>
                                            <p>Deposit Estimation:</p>
                                            <span className='avax-quantity'>AVAX</span>
                                        </div>
                                        <div className='input'>
                                            <input
                                                className='input-text'
                                                type="text" name="name"
                                                placeholder=''
                                                readOnly={true}
                                                value={deposit}
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
                    : TransactionResult(true)


                // 
            }

        </div >
    )
}
