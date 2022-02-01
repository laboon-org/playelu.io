import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import '../scss/page_home/home_tablet.scss';
import '../scss/page_home/home_mobile.scss';

export default function Header(props) {
  const {urlApi} = props;
  return (
    <div className="navbar-header">
      <div className="menu">
        <Link to="/" className="playelu__menu-element">
          <h4>Home</h4>
        </Link>
        <a
          className="playelu__menu-element"
          href={_.isEmpty(urlApi) ? '' : urlApi.docs.roadmap}
          target="_blank"
          rel="noreferrer"
        >
          <h4>Roadmap</h4>
        </a>
        <a
          className="playelu__menu-element"
          href={_.isEmpty(urlApi) ? '' : urlApi.docs.tokenomic}
          target="_blank"
          rel="noreferrer"
        >
          <h4>Tokenomic</h4>
        </a>
        <a
          className="playelu__menu-element"
          href={_.isEmpty(urlApi) ? '' : urlApi.docs.litepaper}
          target="_blank"
          rel="noreferrer"
        >
          <h4>LitePaper</h4>
        </a>
        <Link to="/whitelist" className="playelu__menu-element">
          <h4>WhiteList</h4>
        </Link>
        <Link to="/#" className="playelu__menu-element">
          <h4>Download</h4>
        </Link>
      </div>
      <div className="home-btn__gameplay">
        <img
          className="home-btn__gameplay--background"
          src={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.gameplayBtn}
        />
        <Link to="/gameplay" className="home-btn__gameplay--text">
          <span>Gameplay</span>
        </Link>
      </div>
    </div>
  );
}
