import React from 'react';
import _ from 'lodash';

import SocialLink from './SocialLink';
import UrlRescusive from '../UrlRecursive';

export default function Footer(props) {
  const {urlApi} = props;

  return (
    <UrlRescusive data={props}>
      <div className="footer">
        <SocialLink urlApi={urlApi} />
        <div className="policy">
          <a
            href={_.isEmpty(urlApi) ? '' : urlApi.docs.privacyPolicy}
            target="_blank"
            rel="noreferrer"
          >
            <span>Privacy Policy</span>
          </a>
          <span>|</span>
          <a
            href={_.isEmpty(urlApi) ? '' : urlApi.docs.conditions}
            target="_blank"
            rel="noreferrer"
          >
            <span>Terms & Conditions</span>
          </a>
        </div>
        <span className="version">v0.6.9 - 20220201</span>
      </div>
    </UrlRescusive>
  );
}
