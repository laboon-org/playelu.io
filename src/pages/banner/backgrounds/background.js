import React from 'react'
import urlConstant from '../../../urlConstant'
import BackgroundComet from "./bacgroundComet";
import Stars from "./Stars";
import BackgroundStar from "./backgroundStar";
import BackgroundCloud from './backgroundCloud';
import '../../../scss/home/backgroundHome.scss'

export default function Background() {
    return (
        <div className='playelu-background'>
            <BackgroundCloud />
            <BackgroundComet />
            <BackgroundStar />
            <div className='shooting-star'>
                <Stars imgUrl={urlConstant.image.homeBackground.star5} />
                <Stars imgUrl={urlConstant.image.homeBackground.star5} />
                <Stars imgUrl={urlConstant.image.homeBackground.star5} />
                <Stars imgUrl={urlConstant.image.homeBackground.star5} />
                <Stars imgUrl={urlConstant.image.homeBackground.star5} />
                <Stars imgUrl={urlConstant.image.homeBackground.star5} />
            </div>
            {/* <CloudBottom /> */}
        </div>
    )
}
