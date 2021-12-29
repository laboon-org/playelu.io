import React from 'react'
import _ from "lodash";


export default function GameplayRune(props) {
    const { urlApi } = props
    console.log('test', urlApi)
    return (
        <div className="gameplay__rune">
            <img className='gameplay__rune-stone' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.stoneRune} alt="" />
            <div className="gameplay__rune-light">
                <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.lightRune1} alt="" />
            </div>
            <div className='gameplay__rune-crushed_stone'>
                <img src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.crushedStone} alt="" />
            </div>
        </div>
    )
}
