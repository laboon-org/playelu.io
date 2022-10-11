import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import '../../scss/common/header/top_menu.scss';

export default function TopMenu(props) {
  const { url_api } = props;

  return (
    <div className="navbar-header">
      <a className="home-icon__link" href="/">
        <img
          className="home-icon__img"
          src={_.isEmpty(url_api) ? '/#' : url_api.common.homeIcon}
          alt="Home Icon"
        />
      </a>
      <div className="menu">
        <a
          className="playelu__menu-element"
          href={_.isEmpty(url_api) ? '/#' : url_api.docs.roadmap}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Roadmap</h4>
        </a>
        <a
          className="playelu__menu-element"
          href={_.isEmpty(url_api) ? '/#' : url_api.docs.tokenomic}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Tokenomic</h4>
        </a>
        <a
          className="playelu__menu-element"
          href={_.isEmpty(url_api) ? '/#' : url_api.docs.litepaper}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>LitePaper</h4>
        </a>
        <a href="https://laboon.org/crew" className="playelu__menu-element">
          <h4>Team</h4>
        </a>
        <Link to="/whitelist" className="playelu__menu-element">
          <h4>WhiteList</h4>
        </Link>
        <Link to="/#" className="playelu__menu-element">
          <h4>Download</h4>
        </Link>
      </div>
      <div className="home-btn__gameplay btn-desktop-gameplay">
        <img
          className="home-btn__gameplay--background"
          src={
            _.isEmpty(url_api) ? '/#' : url_api.image.homeBackground.gameplayBtn
          } alt="Gameplay Button"
        />
        <Link to="/gameplay" className="home-btn__gameplay--text">
          <span>Gameplay</span>
        </Link>
      </div>
    </div>
  );
}
