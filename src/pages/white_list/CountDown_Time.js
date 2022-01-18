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
                <span>Day</span>
                <span>{timerDays}</span>
            </div>
            <div className='countdown-element'>
                <span>Hour</span>
                <span>{timerHours}</span>
            </div>
            <div className='countdown-element'>
                <span>Minute</span>
                <span>{timerMinutes}</span>
            </div>
            <div className='countdown-element'>
                <span>Second</span>
                <span>{timerSeconds}</span>
            </div>
        </div>
    )
}
