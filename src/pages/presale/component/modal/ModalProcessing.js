import React from 'react';
import ModalLoader from './ModalLoader';

export default function ModalInProcessing(props) {
  return (
    <div className='modal-sale'>
      <div className='modal-sale-frame'>
        <span className='modal-sale__title'>
                    in processing
        </span>
        <img
          className='modal-sale__img'
          src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig-boon.webp'
          alt=''
        />
        <ModalLoader />
      </div>
    </div>
  );
}
