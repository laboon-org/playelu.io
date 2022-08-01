import React from 'react';
import _ from 'lodash';

export default function GameplayRune(props) {
  const {url_api} = props;
  return (
    <div className="gameplay__rune">
      <img className='gameplay__rune-stone' src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.stoneRune} alt="" />
      <div className="gameplay__rune-light">
        <img src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.lightRune} alt="" />
      </div>
      <div className='gameplay__rune-crushed_stone'>
        <img src={_.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.crushedStone} alt="" />
      </div>
    </div>
  );
}

// url_api.imageGamePlay.skyTop.stoneRune
// url_api.imageGamePlay.skyTop.lightRune
// url_api.imageGamePlay.skyTop.crushedStone
