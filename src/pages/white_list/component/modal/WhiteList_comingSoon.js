import React, { useEffect, useState } from 'react'
import CountDownTime from '../../CountDown_Time.js'

export default function WhiteListComingSoon() {
    const [timerDays, settimerDays] = useState()
    const [timerHours, settimerHours] = useState()
    const [timerMinutes, settimerMinutes] = useState()
    const [timerSeconds, settimerSeconds] = useState()

    let interval;
    const startTimer = () => {
        const countDownDate = new Date("May 19,2021").getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            const days = Math.floor(distance / (24 * 60 * 60 * 1000))
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))
            const seconds = Math.floor(distance % (60 * 1000) / 1000)
            if (distance < 0) {
                // stop countDow
                clearInterval(interval.current)
            } else {
                // update time
                settimerDays(days)
                settimerHours(hours)
                settimerMinutes(minutes)
                settimerSeconds(seconds)
            }
        })
    }
    useEffect(() => {
        startTimer()
    })
    return (
        <div className='contribute'>
            <span className='contribute--shadow'></span>
            <div className='contribute-frame'>
                <div className='modal-succeed'>
                    <div className='modal-succeed__body modal-comingSoon__body'>
                        <img
                            className='modal-succeed__body__img'
                            src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/comingsoon.webp'
                            alt=''
                        />

                        <div className='modal-succeed__body__content modal-comingSoon__content'>
                            <p className='modal-succeed__content--title'>
                                Coming Soon!
                            </p>
                            <span className='modal-succeed__content--sub'>
                                We’ll open the sale page soon, please wait! Thanks
                            </span>
                        </div>
                        <CountDownTime
                            timerDays={timerDays}
                            timerHours={timerHours}
                            timerMinutes={timerMinutes}
                            timerSeconds={timerSeconds}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
