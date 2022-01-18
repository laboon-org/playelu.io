import React from 'react'
import './component/claimScss/Claim.scss'
import '../../scss/sale_page/style.scss'
import '../../scss/reponsiveness/sale_page/ipad.scss'
import '../../scss/reponsiveness/sale_page/mobile.scss'

import Header from '../sale_page/component/Header'
import ClaimBody from './component/ClaimBody'

export default function ClaimPage() {
    return (
        <div className="white-list">
            <Header />
            <ClaimBody />
        </div>
    )
}
