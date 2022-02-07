import React, {useEffect, useState, useRef} from 'react';
import './modal_comingsoon.scss';

export default function WhiteListComingSoon(props) {

  const [timerDays, settimerDays] = useState('00');
  const [timerHours, settimerHours] = useState('00');
  const [timerMinutes, settimerMinutes] = useState('00');
  const [timerSeconds, settimerSeconds] = useState('00');

  const {dateProp} = props;

  const interval = useRef();
  const isFirst = useRef(true);

  const startTimer = () => {
    const countDownDate = new Date(dateProp).getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60)));
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(distance % (60 * 1000) / 1000);
      if (distance < 0) {
        // stop countDow
        clearInterval(interval.current);
      } else {
        // update time
        settimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        settimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      startTimer();
    }
  });

  return (
    <div className='contribute'>
      <span className='contribute--shadow'></span>
      <div className='modal-comingsoon__whitelist'>
        <img
          className='modal-succeed__body__img modal-comingsoon__whitelist--img'
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

        {/* Count down */}
        <div className='countdown'>
          <div className='countdown-element'>
            <div className='time'>
              <div className='countdown-element__shadow'></div>
              <span>{timerDays}</span>
            </div>
            <span className='countdown-element__title'>Day</span>
          </div>
          <div className='countdown-element'>
            <div className='time'>
              <div className='countdown-element__shadow'></div>
              <span>{timerHours}</span>
            </div>
            <span className='countdown-element__title'>
              Hour
            </span>
          </div>
          <div className='countdown-element'>
            <div className='time'>
              <div className='countdown-element__shadow'></div>
              <span>{timerMinutes}</span>
            </div>
            <span className='countdown-element__title'>Minute</span>
          </div>
          <div className='countdown-element'>
            <div className='time'>
              <div className='countdown-element__shadow'></div>
              <span>{timerSeconds}</span>
            </div>
            <span className='countdown-element__title'>Second</span>
          </div>
        </div>
      </div>
    </div>
  );
}
