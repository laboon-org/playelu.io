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
          src='https://media.graphassets.com/U766yZCPTtqMDJ5mwgCF'
          alt=''
        />
        <ModalLoader />
      </div>
    </div>
  );
}
