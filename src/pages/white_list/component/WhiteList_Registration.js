import React, { useState } from 'react'
import moment from 'moment'
import ModalSucceedWhiteList from './modal/ModalSucceed_whiteList'
import wallet from '../../../module/wallet'
import axios from 'axios'
import messageStorage from '../../../module/messageStorage'
import WhiteListComingSoon from './modal/WhiteList_comingSoon'
import '../../../scss/reponsiveness/sale_page/mobile.scss'

//* Get Config

const getStatePage = () => {
    const CONFIG = messageStorage.getInstance().getMessage('config')
    const data = CONFIG['Page Setting'].data
    const index = data.findIndex((v, i, obj) => {

        if (v['Page Name'] == 'whitelist') {
            return true
        }
    })

    const pageSetting = data[index]

    return pageSetting.Toggle === 'TRUE'
}

const getConfigRoundData = () => {
    const CONFIG = messageStorage.getInstance().getMessage('config')
    let boonData = {}
    if (CONFIG['Round Setting'] != null) {
        const data = CONFIG['Round Setting'].data

        const index = data.findIndex((v, i, obj) => {
            //19   19     
            if (moment(v.Start).subtract(1, 'days').isBefore(moment()) && moment(v.End).add(1, 'days').isAfter(moment())) {
                return true
            }
        })

        if (index != -1) {
            boonData = data[index]
        }
        return boonData
    }
    return {

    }
}
const findAvaxValue = () => {
    const CONFIG = messageStorage.getInstance().getMessage('config')

    if (CONFIG.Common != null) {
        const dataCommon = CONFIG.Common.data
        let avaxValue = 0
        const index = dataCommon.findIndex((v, i, obj) => {
            if (v.Key == 'avax_value') {
                return true
            }
        })

        if (index != -1) {
            avaxValue = dataCommon[index].Value
        }
        return parseFloat(avaxValue)
    }
    return 0
}

const findBoonValue = () => {
    const CONFIG = messageStorage.getInstance().getMessage('config')
    if (CONFIG['Round Setting'] != null) {
        const data = CONFIG['Round Setting'].data
        let boonValue = 0
        const index = data.findIndex((v, i, obj) => {
            if (moment(v.Start).isAfter(moment().subtract(1, 'days')) && moment(v.End).isAfter(moment().add(1, 'days'))) {
                return true
            }
        })

        if (index != -1) {
            boonValue = data[index]['Sell Price']
        }
        return parseFloat(boonValue)
    }
    return 0
}

//* Function
const calValueDeposit = (amount) => {
    const avaxValueUSD = findAvaxValue()
    const boonValueUSD = findBoonValue()
    const calAvaxAmount = (boonAmount) => {
        const USD = boonAmount * boonValueUSD
        return USD / avaxValueUSD
    }

    const boonAmount = parseInt(amount.split('.').join(''))
    const avaxAmount = (Math.round(calAvaxAmount(boonAmount) * 1000) / 1000) + ''
    return avaxAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}

export default function WhiteList_Registration() {

    //*State
    const [amount, setAmount] = useState(('').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    const [deposit, setDeposit] = useState('')
    const [modalSucceedShow, setModalSucceedShow] = useState(false)
    const [modalCommingShow, setModalCommingShow] = useState(!getStatePage())
    console.log(modalCommingShow)
    //* Function callback
    const setValueDeposit = (amount) => {

        setDeposit(calValueDeposit(amount))
    }

    const showModalSucceed = () => {
        setModalSucceedShow(true)
    }

    const register = async () => {

        //* disable eslint in here
        if (!confirm('Are you sure about your choice?')) {//eslint-disable-line    
            return
        }

        const boonValue = parseInt(amount.split('.').join(""));

        //* Get ref code
        let storage = window.localStorage;
        let id = storage.getItem('id')
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

        {!modalCommingShow ?
            (!modalSucceedShow ?
                <>
                    <div className='white-list__title'>
                        <span>WHITELIST: REGISTRATION</span>
                        <div className='white-list__subtitle'>
                            <span>Round:</span>
                            <span className='white-list__strategy'> {getConfigRoundData()["Round Name"]} ({findBoonValue()}$)</span>
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
                                                setDeposit('')
                                            }
                                            const reg = new RegExp('^[0-9]+$');
                                            if (reg.test(e.target.value.split('.').join(""))) {
                                                const amount = e.target.value.split('.').join("").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
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
                                    <p>Preparing Amount</p>
                                    <span className='avax-quantity'>AVAX</span>
                                </div>
                                <div className='input'>
                                    <input
                                        value={deposit}
                                        className='input-text'
                                        style={{
                                            color: '#B6B6B6'
                                        }}
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

                    {
                        window.localStorage.getItem('id') == undefined || window.localStorage.getItem('id') == null
                            ? <></>
                            : <span className='white-list__code'>*Code: {window.localStorage.getItem('id')}</span>}
                </>
                :
                <ModalSucceedWhiteList message={'Thanks you! for register whitelist.'} />
            ) : <WhiteListComingSoon />
        }
    </>)
}
