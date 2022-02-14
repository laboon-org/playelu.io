import React from 'react';
import _ from 'lodash';

import './../../scss/common/footer/floating_discord.scss';

import UrlRecursive from '../UrlRecursive';
export default function FloatingDiscord(props) {
  const {url_api} = props;

  return (
    <UrlRecursive data={props}>
      <div className="discord">
        <a href="https://discord.io/EluVerse">
          <img
            className="discord-img"
            src={_.isEmpty(url_api) ? '' : url_api.image.discord}
            alt=""
          />
          <img
            className="mobile__discord-img"
            src={_.isEmpty(url_api) ? '' : url_api.image.mobileDiscord}
            alt=""
          />
        </a>
      </div>
    </UrlRecursive>
  );
}
