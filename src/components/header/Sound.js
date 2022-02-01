import React from 'react';
import {useState} from 'react';
import _ from 'lodash';

export default function Sound(props) {
  const {urlApi} = props;
  const [isPlay, setPlay] = useState(true);
  const handlePausePlayClick = () => {
    if (isPlay) {
      setPlay(false);
    } else {
      setPlay(true);
    }
    // setPlay(!isPlay);
  };
  return (
    <div className="sound" onClick={handlePausePlayClick}>
      {isPlay ? <div>
        <audio className="audio" autoPlay loop preload='metadata' >
          <source src="https://storage.googleapis.com/laboon-img-storage/play-elu/soundtrack-bg/soundtrack_bg1.mp3" type="audio/mpeg" />
        </audio>
        <img className="sound-on active" src={_.isEmpty(urlApi) ? '' : urlApi.image.soundOn} alt="" /></div> :
                <img className="sound-off" src={_.isEmpty(urlApi) ? '' : urlApi.image.soundOff} alt="" />
      }
    </div>
  );
}
