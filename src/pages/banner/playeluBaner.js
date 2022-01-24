import React from 'react';
import _ from 'lodash';
import Navbar from './navbar';
import UrlRescusive from '../../UrlRescusive';
import '../../scss/reponsiveness/home/home_Ipad.scss';
import '../../scss/reponsiveness/home/home_mobile.scss';
import Background from './backgrounds/background';
import Content from './playelu_content';
import Cursor from '../../components/cursor';
import LaunchHeader from '../../components/LaunchHeader';
import Sound from '../../components/sound';
import Header from '../../components/Header';

export default function PlayeluBaner(props) {
  const {urlApi, setting} = props;
  return (
    <UrlRescusive data={props}>
      <div className='playelu-body'>
        <Cursor />
        <div className="discord">
          <a href="https://discord.io/EluVerse">
            <img className="discord-img" src={_.isEmpty(urlApi) ? '' : urlApi.image.discord} alt="" />
            <img className="mobile__discord-img" src={_.isEmpty(urlApi) ? '' : urlApi.image.mobileDiscord} alt="" />
          </a>
        </div>
        {/* ********Launch Header************ */}
        {
          setting.page_home_section_top_contract_address_enabled === true ? <LaunchHeader /> : ''
        }
        <div className="header">
          <a className='home-icon__link' href='https://playelu.io'>
            <img
              className='home-icon__img'
              src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/button/Home-icon.webp'
              alt=''
            />
          </a>
          <Header />
          <Navbar />
        </div>
        <Sound />
        <LaunchHeader />
        <div className="playelu">
          <Background />

          <Content />
        </div>
      </div>
    </UrlRescusive>
  );
}
