import React, {useState} from 'react';
import _ from 'lodash';

import Assets from "./../../constant/assets";

import '../../scss/common/header/navbar_mobile.scss';

import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export default function NavbarMobile(props) {
  const {urlApi} = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div>
      <a className="home-icon__link" href="/">
        <img
          className="home-icon__img"
          src={Assets.icon.ic_home}
          alt="Home Icon"
        />
      </a>
      <div className="navbar-btn" onClick={() => setShow(true)}>
        <img src={_.isEmpty(urlApi) ? "" : urlApi.image.navbarBtn} alt="" />
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className="modal--frame">
          <div className="header__modal-navbar">
            <a href="/">
              <img
                src={_.isEmpty(urlApi) ? "" : urlApi.common.homeIcon}
                alt="Home Icon"
              />
            </a>
            <div className="close__modal-navbar" onClick={() => handleClose()}>
              <img
                src={_.isEmpty(urlApi) ? "" : urlApi.common.closeBtn}
                alt="Close Icon"
              />
            </div>
          </div>
          <div className="body__modal-navbar">
            <div className="modal-logo">
              <img
                src={_.isEmpty(urlApi) ? "" : urlApi.image.eluLogo1}
                alt='Elu Logo'
              />
            </div>
            <div className="modal-element">
              <a
                href={_.isEmpty(urlApi) ? "" : urlApi.docs.roadmap}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={_.isEmpty(urlApi) ? "" : urlApi.modal.backgroundBtn}
                  alt=""
                />
                <div className="modal-element--text">
                  <h2>Roadmap</h2>
                </div>
              </a>
            </div>
            <div className="modal-element">
              <a
                href={_.isEmpty(urlApi) ? "" : urlApi.docs.tokenomic}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={_.isEmpty(urlApi) ? "" : urlApi.modal.backgroundBtn}
                  alt=""
                />
                <div className="modal-element--text">
                  <h2>Tokenomic</h2>
                </div>
              </a>
            </div>
            <div className="modal-element">
              <a
                href={_.isEmpty(urlApi) ? "" : urlApi.docs.litepaper}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={_.isEmpty(urlApi) ? "" : urlApi.modal.backgroundBtn}
                  alt='LitePaper'
                />
                <div className="modal-element--text">
                  <h2>LitePaper</h2>
                </div>
              </a>
            </div>
            <div className="modal-element">
              <Link to="/whitelist">
                <img
                  src={_.isEmpty(urlApi) ? "" : urlApi.modal.backgroundBtn}
                  alt='Whitelist'
                />
                <div className="modal-element--text">
                  <h2>WhiteList</h2>
                </div>
              </Link>
            </div>
            <div className="modal-element">
              <Link to="/#">
                <img
                  src={_.isEmpty(urlApi) ? "" : urlApi.modal.backgroundBtn}
                  alt=""
                />
                <div className="modal-element--text">
                  <h2>Download</h2>
                </div>
              </Link>
            </div>
            <div className="home-btn__gameplay">
              <img
                className="home-btn__gameplay--background"
                src={
                  _.isEmpty(urlApi)
                    ? ""
                    : urlApi.image.homeBackground.gameplayBtn
                }
                alt='Home Background'
              />
              <Link to="/gameplay" className="home-btn__gameplay--text">
                Gameplay
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}