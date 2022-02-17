import React from 'react';
import _ from 'lodash';

import './../../scss/common/footer/floating_discord.scss';

import UrlRecursive from '../UrlRecursive';
export default function FloatingDiscord(props) {
  const { urlApi } = props;

  return (
    <UrlRecursive data={props}>
      <div className="discord">
        <a href="https://discord.io/EluVerse">
          <img
            className="discord-img"
            src={_.isEmpty(urlApi) ? '' : urlApi.image.discord}
            alt=""
          />
          <img
            className="mobile__discord-img"
            src={_.isEmpty(urlApi) ? '' : urlApi.image.mobileDiscord}
            alt=""
          />
        </a>
      </div>
    </UrlRecursive>
  );
}
