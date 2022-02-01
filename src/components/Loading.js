import React from 'react';
import '../scss/common/loading.scss';

export default function Loading() {
  return (
    <div id='loading'>
      <div className='loading-outer'>
        <div className='loading-inner'>
          <div className='loading-inner1'>
          </div>
        </div>

      </div>
      <div className='loading-logo'>
        <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/logo1.webp' className='loading-img' alt='logoElu' />
      </div>
    </div>
  );
}
