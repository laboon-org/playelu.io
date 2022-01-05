import React from 'react'
import BackgroundComet from "./bacgroundComet";
import Stars from "./Stars";
import BackgroundStar from "./backgroundStar";
import BackgroundCloud from './backgroundCloud';
import UrlRescusive from '../../../UrlRescusive';
import _ from "lodash";


import '../../../scss/home/backgroundHome.scss'

export default function Background(props) {
    const { urlApi } = props
    return (
        <UrlRescusive data={props}>
            <div className='playelu-background'>
                <BackgroundCloud />
                <BackgroundComet />
                <BackgroundStar />
                <div className='shooting-star'>
                    <Stars imgUrl={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5} />
                    <Stars imgUrl={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5} />
                    <Stars imgUrl={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5} />
                    <Stars imgUrl={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5} />
                    <Stars imgUrl={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5} />
                    <Stars imgUrl={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.star5} />
                </div>
                {/* <CloudBottom /> */}
            </div>
        </UrlRescusive>
    )
}
