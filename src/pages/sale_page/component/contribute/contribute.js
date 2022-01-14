import React, { useState, useCallback } from 'react'
// import url from '../../constant/url'
import axios from 'axios'
import web3 from 'web3'

import wallet from '../../../../module/wallet'
import ModalFail from '../modal/ModalFail'
import NotfoundModal from '../NotfoundModal'
import ModalSucceed from '../modal/ModalSucceed'
import contractAbi from '../../../../constant/contractABI'


//* const
const boonValueUSD = 0.01;

export default function Contribute(props) {
    const { showLoading, data } = props
    //*State
    const [amount, setAmount] = useState("")
    const [deposit, setDeposit] = useState("")
    const [infoState, setInfoState] = useState(false)
    const [infoValue, setInfoValue] = useState("")
    //* Show form contribute or message
    const [contribute, setContribute] = useState(true)
    const [stateTransaction, setStateTransaction] = useState(false)

    const setValueDeposit = (amount) => {

        //?
        const avaxValueUSD = 89.28;//?
        const calAvaxAmount = (boonAmount) => {
            const USD = boonAmount * boonValueUSD
            return USD / avaxValueUSD
        }

        const boonAmount = parseInt(amount.split(',').join(''))
        const avaxAmount = (Math.round(calAvaxAmount(boonAmount) * 1000) / 1000) + ''
        setDeposit(avaxAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
    }

    const doTransactionInBC = async () => {
        try {

            // const Web3 = new web3(web3.givenProvider)
            // const boonToken = new web3.eth.Contract(contractAbi.ABI, contractAbi.contractAddress)
            // const senderAddress = wallet.getInstance().account
            // const receiverAddress = ''//* get after
            //test call
            // boonToken.methods.
            // .transfer(receiverAddress, avaxAmount)
            //     .send({ from: senderAddress }, function (err, res) {
            //         if (err) {
            //             console.log("An error occured", err)
            //             throw new Error(err)
            //         }
            //         //* if succeed
            //         console.log("Hash of the transaction: " + res)
            //     })

            return {
                isVaild: true
            }
        } catch (err) {
            return {
                isVaild: false,
                message: err.message
            }
        }
    }

    const failureMessage = (messageCode, message = '') => {
        switch (messageCode) {
            case 'SMALL_AMOUNT': {
                setInfoValue("Your $Boon amount is smaller than the original in WL")
                setContribute(false)
                setStateTransaction(false)
                break;
            }
            case 'NO_ADDRESS': {
                setInfoValue("Your Wallet Address isn't in WL")
                setContribute(false)
                setStateTransaction(false)
                break;
            }
            case 'ERROR_BC': {
                setInfoValue(message)
                setContribute(false)
                setStateTransaction(false)
                break;
            }
            default: {
                setInfoValue("Unable to identify error")
                setContribute(false)
                setStateTransaction(false)
                break;
            }
        }
    }

    const onPressContribute = async () => {
        //*Check Wallet Condition 
        try {
            showLoading(true)
            const SHEET_NAME = '1.Seed'
            const PAYMENT_METHOD = 'AVAX'
            let transaction_status = false
            const URL = 'https://laboon.as.r.appspot.com/confirm_transaction'
            const boonValue = parseInt(amount.split(',').join(""));
            const transactionValidation = await axios.post(URL, {
                "sheet_name": SHEET_NAME,
                "address_wallet": wallet.getInstance().account,
                "boon_amount": boonValue,
                "payment_method": PAYMENT_METHOD,
                "purchase_price": boonValue * boonValueUSD,
                "transaction_status": transaction_status
            }).then((res) => {
                return res.data
            }).catch(err => {
                showLoading(false)
                throw err
            })

            if (transactionValidation.status != 200) {
                //* Failure
                const messageCode = transactionValidation.message
                failureMessage(messageCode)
            } else {
                //* Succeed
                //* Transaction in BC
                const transaction = await doTransactionInBC()
                if (transaction.isVaild) {
                    //*Succeed
                    //*Confirm in google sheet
                    const transactionConfirm = await axios.post(URL, {
                        "sheet_name": SHEET_NAME,
                        "address_wallet": wallet.getInstance().account,
                        "boon_amount": boonValue,
                        "payment_method": PAYMENT_METHOD,
                        "purchase_price": boonValue * boonValueUSD,
                        "transaction_status": true
                    }).then((res) => {
                        return res.data
                    }).catch(err => {
                        showLoading(false)
                        throw err
                    })

                    if (transactionConfirm.status != 200) {
                        const messageCode = transactionConfirm.message
                        //* Must be complete in here to confirm in google sheets
                        failureMessage(messageCode)
                    }
                } else {
                    failureMessage('ERROR_BC', transaction.message)
                   
                }

                //*Change state
                setContribute(false)
                setStateTransaction(true)
                showLoading(false)
            }

            //setInfoState(true)
        } catch (err) {

        }
    }
    const TransactionResult = (result) => {
        if (result) {
            return (
                <ModalSucceed
                    forwardBack={() => {
                        setContribute(true)
                    }}
                />
            )
        } else {
            return (
                <ModalFail
                    message={infoValue}
                    forwardBack={() => {
                        setContribute(true)
                    }}
                />
            )
        }
    }


    return (
        <div className='contribute'>
            {
                contribute ?
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
                                    onClick={async () => {
                                        await onPressContribute()
                                    }}
                                >
                                    <span>
                                        CONTRIBUTE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    : TransactionResult(stateTransaction)
            }

        </div >
    )
}
