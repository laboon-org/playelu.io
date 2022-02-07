import React from 'react';
import {useState} from 'react';
import _ from 'lodash';

import '../../scss/common/header/sound.scss';
export default function Sound(props) {
  const {urlApi, sourceUrl} = props;
  const [isPlay, setPlay] = useState(true);
  const handlePausePlayClick = () => {
    if (isPlay) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };
  return (
    <div className="sound" onClick={handlePausePlayClick}>
      {isPlay ? (
        <div>
          <audio className="audio" autoPlay loop preload="metadata">
            <source src={sourceUrl} type="audio/mpeg" />
          </audio>
          <img
            className="sound-on active"
            src={_.isEmpty(urlApi) ? '' : urlApi.image.soundOn}
            alt=""
          />
        </div>
      ) : (
        <img
          className="sound-off"
          src={_.isEmpty(urlApi) ? '' : urlApi.image.soundOff}
          alt=""
        />
      )}
    </div>
  );
}
