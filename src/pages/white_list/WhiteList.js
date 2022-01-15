import React from 'react'
import '../../scss/sale_page/style.scss'
import '../../scss/reponsiveness/sale_page/ipad.scss'
import '../../scss/reponsiveness/sale_page/mobile.scss'
import Header from '../sale_page/component/Header'
import Logo from '../sale_page/component/logo'
import WhiteListBody from './component/WhiteListBody'


export default function WhiteList() {
    return (
        <div className="white-list">
            <Header />
            <WhiteListBody />
        </div>
    )
}
