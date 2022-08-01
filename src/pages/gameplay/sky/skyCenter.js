import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import DropFeaturesModal from './../components/modals/DropFeaturesModal';
import UrlRecursive from './../../../components/UrlRecursive';

window.addEventListener('scroll', zoom);
function zoom() {
  const zoom = document.querySelectorAll('.zoom');
  for (let i = 0; i < zoom.length; i++) {
    const windowHeght = window.innerHeight;
    const scaleTop = zoom[i].getBoundingClientRect().top;
    const scalepoin = 50;
    if (scaleTop < windowHeght - scalepoin) {
      zoom[i].classList.add('active');
    }
  }
}

export default function SkyCenter(props) {
  const {url_api} = props;
  const listIslandUrl = [
    {
      url1: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.islandBlank1,
      url2: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.fireIsland,
      url3: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.fireIslandImg,
    },
    {
      url1: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.islandBlank2,
      url2: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.fountain,
      url3: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.fountainImg,
    },
    {
      url1: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.islandBlank1, // url_api.imageGamePlay.skyCenter.islandBlank3,
      url2: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.islandWater,
      url3: _.isEmpty(url_api) ?
        '' : url_api.imageGamePlay.skyCenter.islandWaterImg,
    },
  ];
  const [dropShow, setDropShow] = useState(false);
  const onPressShowEluDrop = useCallback(() => {
    setDropShow(true);
  });
  const onPressHideEluDrop = useCallback(() => {
    setDropShow(false);
  });
  const islands = listIslandUrl.map((value, key) => {
    const isFinalItem = listIslandUrl.length - 1 === key;
    const finalClass = isFinalItem ? 'mr-top' : '';
    const mrBottom = isFinalItem ? 'mr-bottom' : '';
    return (
      <div className={`island${key + 1}`} key={key}>
        <img className={`isLand-img ${mrBottom}`} src={value.url1} alt="" />
        <video
          className={`isLand-img ${finalClass}`}
          loop
          autoPlay
          playsInline
          preload="metadata"
          poster={value.url3}
        >
          <source src={value.url2} type="video/mp4" />
        </video>
      </div>
    );
  });
  return (
    <UrlRecursive data={props}>
      <div>
        <Link to="#onboarding_drop-center">
          <div className="sky-center" id="drop">
            <div className="island zoom">{islands}</div>
          </div>
          <div style={{marginTop: 20, width: '100vw'}}>
            <div>
              {!dropShow ? (
                <div
                  className="elu-btn drop-btn"
                  onClick={() => {
                    onPressShowEluDrop();
                  }}
                >
                  <h2 id="drop_text">Game-1: Drop</h2>
                  <div className="btn-shadow">
                    <p>FEATURES</p>
                  </div>
                </div>
              ) : (
                <DropFeaturesModal
                  show={dropShow}
                  onHide={onPressHideEluDrop}
                />
              )}
            </div>
          </div>
        </Link>
      </div>
    </UrlRecursive>
  );
}
