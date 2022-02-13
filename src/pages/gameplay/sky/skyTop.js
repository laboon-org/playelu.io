import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/skyTop.scss';

import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import GameplayRune from './gameplayRune';
import UrlRecursive from '../../../components/UrlRecursive';

export default function SkyTop(props) {
  const {url_api, setting} = props;

  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => setShowPopup(false);
  const handleShowPopup = () => setShowPopup(true);

  const onPressPopup = () => {
    handleShowPopup();
  };

  const shadowStone = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.shadowStone;
  const boonMoon = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.boonMoon;

  const imgDrop = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.drop;
  const imgNest = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.nest;
  const imgScout = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.scout;
  const imgMetaVerse = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.skyTop.metaVerse;

  const imgEluLogo = _.isEmpty(url_api) ? '' : url_api.image.eluLogo1;

  return (
    <UrlRecursive data={props}>
      <div className="sky-top">
        <Modal
          size="lg"
          dialogClassName="modal-comingsoon"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showPopup}
          onHide={handleClosePopup}
        >
          <div className="popup-frame">
            <div className="close-popup" onClick={() => handleClosePopup()}>
              <img
                src={
                  _.isEmpty(url_api) ?
                    '' :
                    url_api.imageGamePlay.popupComingSoon.closePopup
                }
                alt=""
              />
            </div>
            <div className="popup-title">
              <div className="popup-title__box">
                <img
                  src={
                    _.isEmpty(url_api) ?
                      '' :
                      url_api.imageGamePlay.popupComingSoon.frameComingSoon
                  }
                  alt=""
                />
                <div className="popup-title__text">
                  <h1>coming up soon</h1>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <div className="gameplay-selection">
          <div className="gameplay__selection-img">
            <Link to="#drop">
              <img
                className="shadow-stone shadow-stone-1"
                src={shadowStone}
                alt="Game-1: Drop (Match-3)"
              />
              <img src={imgDrop} alt="" />
            </Link>
          </div>
          <div className="gameplay__selection-img">
            <Link to="#nest">
              <img
                className="shadow-stone shadow-stone-2"
                src={shadowStone}
                alt="Boon Token"
              />
              <img src={imgNest} alt="Game-2: Nest (Framing & Battling)" />
            </Link>
          </div>
          <div className="rune">
            <Link to="/">
              <GameplayRune />
              <img className="gameplay__boonmoon-img" src={boonMoon} alt="" />
            </Link>
          </div>
          {setting.page_gameplay_section_scout_game_feature_enabled === true ? (
            <div className="gameplay__selection-img" onClick={onPressPopup}>
              <img
                className="shadow-stone shadow-stone-3"
                src={shadowStone}
                alt=""
              />
              <img src={imgScout} alt="Game-3: Scout (MOBA)" />
            </div>
          ) : (
            <div className="gameplay__selection-img">
              <img
                className="shadow-stone shadow-stone-3"
                src={shadowStone}
                alt=""
              />
              <img src={imgScout} alt="Game-3: Scout (MOBA)" />
            </div>
          )}

          <div className="gameplay__selection-img" onClick={onPressPopup}>
            <img
              className="shadow-stone shadow-stone-4"
              src={shadowStone}
              alt=""
            />
            <img src={imgMetaVerse} alt="Game-4: Meta Verse" />
          </div>
        </div>
        <div className="gameplay-logo">
          <img
            className="gameplay__logo-img"
            src={imgEluLogo}
            alt="Logo EluVerse"
          />
        </div>
      </div>
    </UrlRecursive>
  );
}
