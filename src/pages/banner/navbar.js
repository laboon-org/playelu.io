import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import '../../scss/home/modalNavbar.scss';
import Footer from '../../components/Footer';

export default function Navbar(props) {
  const {urlApi} = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <div>
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
            <a href="https://playelu.io">
              <img
                src={_.isEmpty(urlApi) ? "" : urlApi.common.homeIcon}
                alt=""
              />
            </a>
            <div className="close__modal-navbar" onClick={() => handleClose()}>
              <img
                src={_.isEmpty(urlApi) ? "" : urlApi.common.closeBtn}
                alt=""
              />
            </div>
          </div>
          <div className="body__modal-navbar">
            <div className="modal-logo">
              <img
                src={_.isEmpty(urlApi) ? "" : urlApi.image.eluLogo1}
                alt=""
              />
            </div>
            <div className="modal-element">
              <a
                href={_.isEmpty(urlApi) ? "" : urlApi.docs.roadmap}
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
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
                rel="noreferrer"
              >
                <img
                  src={_.isEmpty(urlApi) ? "" : urlApi.modal.backgroundBtn}
                  alt=""
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
                  alt=""
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
