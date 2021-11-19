import React from 'react'
import SkyCenter from './skyCenter'
import '../../css/gameplay.scss'
import '../../css/responsiveGameplay.scss'
import urlConstant from '../../urlConstant'

export default function Gameplay() {
    return (
        <div className='gameplay-body'>
            <div className='sky'>
                <div className='sky-top container'>
                    <div className='gameplay-selection'>
                        <div className='col drop'>
                            <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.drop} alt="" />
                        </div>
                        <div className='col nest'>
                            <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.nest} alt="" />
                        </div>
                        <div className='col-6 rune'>
                            <img className="gameplay__rune-img" src={urlConstant.imageGamePlay.rune} alt="" />
                            <img className="gameplay__boonmoon-img" src={urlConstant.imageGamePlay.boonMoon} alt="" />
                        </div>
                        <div className='col scout'>
                            <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.scout} alt="" />
                        </div>
                        <div className='col metaVerse'>
                            <img className="gameplay__selection-img" src={urlConstant.imageGamePlay.metaVerse} alt="" />
                        </div>
                    </div>
                    <div className='gameplay-logo'>
                        <img className="gameplay__logo-img" src={urlConstant.image.eluLogo} alt="" />
                    </div>
                    <div className='gameplay-cloud'>
                        <img className="gameplay__logo-img" src='' alt="" />
                    </div>
                </div>
                <SkyCenter />
                <div className='sky-bottom'>


                </div>
            </div>
            <div className='beach'>
                <div className='ocean'>
                    {/* <img className="gameplay__ocean-img" src={urlConstant.imageGamePlay.backgroundOcean} alt="" /> */}
                </div>
                <div className='land'>
                    <img className="gameplay__land-img" src={urlConstant.imageGamePlay.backgroundLand} alt="" />
                </div>
            </div>
        </div>
    )
}
