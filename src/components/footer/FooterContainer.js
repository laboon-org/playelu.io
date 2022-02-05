import React from 'react';
import _ from 'lodash';

import '../../scss/common/footer/footer.scss';
import '../../scss/common/footer/footer_tablet.scss';
import '../../scss/common/footer/footer_mobile.scss';

import SocialLink from './SocialLink';
import UrlRecursive from '../UrlRecursive';

export default function FooterContainer(props) {
  const {urlApi} = props;

  return (
    <UrlRecursive data={props}>
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
        <span className="version">v0.7.1 - 20220205</span>
      </div>
    </UrlRecursive>
  );
}
