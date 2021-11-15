import React from 'react'
import cloud1 from '../img/cloud1.png'
import cloud2 from '../img/cloud2.png'
import cloud3 from '../img/cloud3.png'

export default function Background() {
    return (<div className='background-cloud'>
        <div className='cloud x1'>
            <img src={cloud3} alt="" />
            <img className='cloud2' src={cloud2} alt="" />
        </div>
        <div className='cloud x2'>
            <img src={cloud1} alt="" />
        </div>
        <div className='cloud x3'>
            <img src={cloud2} alt="" />
            <img className='cloud2' src={cloud1} alt="" />
        </div>
        <div className='cloud x4'>
            <img src={cloud1} alt="" />
        </div>
        <div className='cloud x5'>
            <img src={cloud3} alt="" />
        </div>
        <div className='cloud x6'>
            <img src={cloud2} alt="" />
        </div>
    </div>
    )
}
