import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import '../scss/reponsiveness/home/home_Ipad.scss';
import '../scss/reponsiveness/home/home_mobile.scss';

export default function Header(props) {
  const {urlApi} = props;
  return (
    <div className='navbar-header'>
      <div className='menu'>
        <a className='playelu__menu-element' href={_.isEmpty(urlApi) ? '' : urlApi.docs.roadmap} target='_blank' rel="noreferrer">
          <h4>Roadmap</h4>
        </a>
        <a className='playelu__menu-element' href={_.isEmpty(urlApi) ? '' : urlApi.docs.tokenomic} target='_blank' rel="noreferrer">
          <h4>Tokenomic</h4>
        </a>
        <Link to='/gameplay' className='playelu__menu-element'>
          <h4>gameplay</h4>
        </Link>
        <a className='playelu__menu-element' href={_.isEmpty(urlApi) ? '' : urlApi.docs.litepaper} target='_blank' rel="noreferrer">
          <h4>Litepaper</h4>
        </a>
      </div>
      <div className='home-btn__gameplay'>
        <img
          className='home-btn__gameplay--background'
          src={_.isEmpty(urlApi) ? '' : urlApi.image.homeBackground.gameplayBtn} />
        <span className='home-btn__gameplay--text'>
                    gameplay
        </span>
      </div>
    </div>
  );
}
