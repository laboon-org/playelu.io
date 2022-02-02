import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import '../../../scss/page_gameplay/skyScss/skyTop.scss';

import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import GameplayRune from './gameplayRune';
import UrlRescusive from '../../../UrlRescusive';

export default function SkyTop(props) {
  const {urlApi, setting} = props;

  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => setShowPopup(false);
  const handleShowPopup = () => setShowPopup(true);

  const onPressPopup = () => {
    handleShowPopup();
  };

  return (
    <UrlRescusive data={props}>
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
                  _.isEmpty(urlApi) ?
                    '' :
                    urlApi.imageGamePlay.popupComingSoon.closePopup
                }
                alt=""
              />
            </div>
            <div className="popup-title">
              <div className="popup-title__box">
                <img
                  src={
                    _.isEmpty(urlApi) ?
                      '' :
                      urlApi.imageGamePlay.popupComingSoon.frameComingSoon
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
            <a href="#drop">
              <img
                className="shadow-stone shadow-stone-1"
                src={
                  _.isEmpty(urlApi) ?
                    '' :
                    urlApi.imageGamePlay.skyTop.shadowStone
                }
                alt=""
              />
              <img
                src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.drop}
                alt=""
              />
            </a>
          </div>
          <div className="gameplay__selection-img">
            <a href="#nest">
              <img
                className="shadow-stone shadow-stone-2"
                src={
                  _.isEmpty(urlApi) ?
                    '' :
                    urlApi.imageGamePlay.skyTop.shadowStone
                }
                alt=""
              />
              <img
                src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.nest}
                alt=""
              />
            </a>
          </div>
          <div className="rune">
            <Link to="/">
              <GameplayRune />
              <img
                className="gameplay__boonmoon-img"
                src={
                  _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.boonMoon
                }
                alt=""
              />
            </Link>
          </div>
          {setting.page_gameplay_section_scout_game_feature_enabled === true ? (
            <div className="gameplay__selection-img" onClick={onPressPopup}>
              <img
                className="shadow-stone shadow-stone-3"
                src={
                  _.isEmpty(urlApi) ?
                    '' :
                    urlApi.imageGamePlay.skyTop.shadowStone
                }
                alt=""
              />
              <img
                src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.scout}
                alt=""
              />
            </div>
          ) : (
            <div className="gameplay__selection-img">
              <img
                className="shadow-stone shadow-stone-3"
                src={
                  _.isEmpty(urlApi) ?
                    '' :
                    urlApi.imageGamePlay.skyTop.shadowStone
                }
                alt=""
              />
              <img
                src={_.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.scout}
                alt=""
              />
            </div>
          )}

          <div className="gameplay__selection-img" onClick={onPressPopup}>
            <img
              className="shadow-stone shadow-stone-4"
              src={
                _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.shadowStone
              }
              alt=""
            />
            <img
              src={
                _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.skyTop.metaVerse
              }
              alt=""
            />
          </div>
        </div>
        <div className="gameplay-logo">
          <img
            className="gameplay__logo-img"
            src={_.isEmpty(urlApi) ? '' : urlApi.image.eluLogo}
            alt=""
          />
        </div>
      </div>
    </UrlRescusive>
  );
}
