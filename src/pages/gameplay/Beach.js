import React, {useCallback, useState} from 'react';
import './css/beach.scss';
import '../../scss/gameplay/beach.scss';
import NestOnBoarding from './nest_onboarding/nest_onBoarding';
import _ from 'lodash';
import UrlRescusive from '../../UrlRescusive';


window.addEventListener('scroll', opacity);
function opacity() {
  const opacity = document.querySelectorAll('.opacity');
  for (let i = 0; i < opacity.length; i++) {
    const windowHeight = window.innerHeight;
    const opacityTop = opacity[i].getBoundingClientRect().top;
    const opacitypoint = 300;
    if (opacityTop < windowHeight + opacitypoint) {
      opacity[i].classList.add('active');
    }
  }
}
export default function Beach(props) {
  const {urlApi, setting} = props;
  const [nestShow, setNestShow] = useState(false);
  const onPressShowNest = () => {
    setNestShow(true);
  };
  const closeNest = useCallback(() => {
    setNestShow(false);
  });
  return (
    <UrlRescusive data={props}>
      <div className='beach' id='nest'>
        <div className='ocean'>
          <div className="ocean-container">
            {/* Nền đằng sau */}
            <img className="ocean-img_back" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.backgroundOcean} alt=''></img>
            {/* Ảnh nền nhận hiệu ứng */}
            <img className="ocean-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.backgroundOcean} alt=''></img>
          </div>
          {/* Hiệu ứng của nước  */}
          <svg className="ocean-effect">
            <filter id='turbulence' x="0" y="0" width="100" height="100%">
              <feTurbulence
                id='sea-filter'
                numOctaves={10}
                seed={4}
                baseFrequency="0.02 0.06"
              ></feTurbulence>
              <feDisplacementMap
                scale="40"
                in="SourceGraphic"
              ></feDisplacementMap>
              <animate
                xlinkHref="#sea-filter"
                attributeName="baseFrequency" dur="60s"
                keyTimes="0;0.5;1"
                values="0.02 0.06;0.04 0.08;0.02 0.06"
                repeatCount="indefinite"
              />
            </filter>
          </svg>
          {/* Kết thúc hiệu ứng của nước  */}
          <div className='boulder'>
            <div className='boulder-element opacity'>
              <div className='house'>
                <img className="pinwheel" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.pinwheel} alt="" />
                <img className="house-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.house} alt="" />
              </div>
              <img className="boulder-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.boulder} alt="" />
            </div>
          </div>
          <div className='oceanIsland'>
            <div className='oceanIsland-element opacity'>
              <video
                className="oceanIsland-img"
                autoPlay loop preload='metadata'
                poster={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.oceanIsland_img}>
                <source src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.ocean.oceanIsland} alt="" />
              </video>
            </div>
          </div>
        </div>
        <div className='land'>
          {nestShow && < div className={'nest_onBoarding'} onClick={() => {
            closeNest();
          }}>
            <NestOnBoarding closeNest={closeNest} />
          </div>
          }
          <img className="land-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.backgroundLand} alt="" />
          <div className="woodsign">
            <div className='woodsign-content'>
              <img className="woodsign-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.woodsign} alt="" />
              <div className='woodsign-text'>
                <img className="woodsign-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.soutText} alt="" />
                <img className="woodsign-img" src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.comingsoonText} alt="" />
              </div>
            </div>
          </div>
          <div className='bone rightEntrance'>
            <img className='bone-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.bone} alt='' />
          </div>
          <img className='fruitBasket-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.fuitBasket} alt='' />
          <div className='core'>
            <div className='gate opacity'>
              <img className='circle-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.core.circle} alt='' />
              <img className='effigy-img' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.core.effigy} alt='' />
              <div className='lightColumn-img'>
                <div className="ag-number_light">
                  <img className='light_column' src='https://storage.googleapis.com/laboon-img-storage/play-elu/gameplay/beach-image/lighto.webp' alt='' />
                  <img className='smoke' src='https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/light-blink/images/target-spiral.png' alt='' />
                </div>
              </div>
              {
                                setting.page_gameplay_section_nest_game_feature_enabled === true ? <div className='eluNest-btn' onClick={() => {
                                  onPressShowNest();
                                }}> <div className='elu-btn nest-btn'>
                                    <h2>NEST</h2>
                                    <div className='btn-shadow'><p>GAME FEATURES</p></div>
                                  </div>
                                </div> :
                                    <div className='eluNest-btn'>
                                      <div className='elu-btn nest-btn'>
                                        <h2>NEST</h2>
                                        <div className='btn-shadow'><p>GAME FEATURES</p></div>
                                      </div>
                                    </div>
              }

            </div>
          </div>
          <div className='character opacity'>
            <div className='character-elu'>
              <img className='character-eluLight' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.character.eluLight} alt='' />
            </div>
            <div className='character-elu'>
              <img className='eluNestBtn-eluFire' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.character.eluFire} alt='' />
            </div>
            <div className='character-elu'>
              <img className='eluNestBtn-eluWater' src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.land.character.eluWater} alt='' />
            </div>
          </div>
        </div>
      </div >
    </UrlRescusive>
  );
}
