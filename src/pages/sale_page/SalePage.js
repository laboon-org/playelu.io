import Header from './component/Header'
import SaleBody from './component/SaleBody'

import '../../scss/sale_page/style.scss'
import '../../scss/reponsiveness/sale_page/ipad.scss'
import '../../scss/reponsiveness/sale_page/mobile.scss'

export default function SalePage() {
    return (
        <div className="sale">
            <Header />
            <SaleBody />
        </div>
    );
}