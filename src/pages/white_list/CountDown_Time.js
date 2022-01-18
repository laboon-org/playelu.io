import React from 'react'

export default function CountDown_Time(props) {
    const {
        timerDays,
        timerHours,
        timerMinutes,
        timerSeconds
    } = props
    console.log('countdown', timerDays);
    console.log('àhfd', timerDays);
    return (
        <div className='countdown'>
            <div className='countdown-element'>
                <div className='time'>
                    <div className='countdown-element__shadow'></div>
                    <span>02</span>
                </div>
                <span className='countdown-element__title'>Day</span>
            </div>
            <div className='countdown-element'>
                <div className='time'>
                    <div className='countdown-element__shadow'></div>
                    <span>04</span>
                </div>
                <span className='countdown-element__title'>
                    Hour
                </span>
            </div>
            <div className='countdown-element'>
                <div className='time'>
                    <div className='countdown-element__shadow'></div>
                    <span>09</span>
                </div>
                <span className='countdown-element__title'>Minute</span>
            </div>
            <div className='countdown-element'>
                <div className='time'>
                    <div className='countdown-element__shadow'></div>
                    <span>07</span>
                </div>
                <span className='countdown-element__title'>Second</span>
            </div>
        </div>
    )
}
