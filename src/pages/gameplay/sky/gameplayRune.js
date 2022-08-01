import React from 'react';
import _ from 'lodash';

import IMG_RUNESTONE from '../../../assets/images/gameplay_page/đá/rune_stone.PNG';
import IMG_RUNELIGHT from '../../../assets/images/gameplay_page/đá/rune_light.PNG';
import IMG_RUNECRUSHEDSTONE from '../../../assets/images/gameplay_page/đá/rune_crushed_stone.PNG';


export default function GameplayRune(props) {
  const {url_api} = props;
  return (
    <div className="gameplay__rune">
      <img className='gameplay__rune-stone' src={_.isEmpty(url_api) ? '' : IMG_RUNESTONE} alt="" />
      <div className="gameplay__rune-light">
        <img src={_.isEmpty(url_api) ? '' : IMG_RUNELIGHT} alt="" />
      </div>
      <div className='gameplay__rune-crushed_stone'>
        <img src={_.isEmpty(url_api) ? '' : IMG_RUNECRUSHEDSTONE} alt="" />
      </div>
    </div>
  );
}

// url_api.imageGamePlay.skyTop.stoneRune
// url_api.imageGamePlay.skyTop.lightRune1
// url_api.imageGamePlay.skyTop.crushedStone
