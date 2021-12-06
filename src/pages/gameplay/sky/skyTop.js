import urlConstant from '../../../urlConstant'
import '../../../scss/gameplay/skyScss/skyTop.scss'

export default function SkyTop() {
    return (
        <div className='sky-top'>
            <div className='gameplay-selection'>
                <div className='col drop'>
                    <a href='#drop'>
                        <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.drop} alt="" />
                    </a>
                </div>
                <div className='col nest'>
                    <a href='#nest'>
                        <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.nest} alt="" />
                    </a>
                </div>
                <div className='col-6 rune'>
                    <img className="gameplay__rune-img" src={urlConstant.imageGamePlay.skyTop.rune} alt="" />
                    <img className="gameplay__boonmoon-img" src={urlConstant.imageGamePlay.skyTop.boonMoon} alt="" />
                </div>
                <div className='col scout'>
                    <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.scout} alt="" />
                </div>
                <div className='col metaVerse'>
                    <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.skyTop.metaVerse} alt="" />
                </div>
            </div>
            <div className='gameplay-logo'>
                <img className="gameplay__logo-img" src={urlConstant.image.eluLogo} alt="" />
            </div>
        </div>
    )
}
