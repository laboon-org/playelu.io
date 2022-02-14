import React from 'react';
import _ from 'lodash';

import '../../scss/common/footer/footer.scss';
import '../../scss/common/footer/footer_tablet.scss';
import '../../scss/common/footer/footer_mobile.scss';

import SocialLink from './SocialLink';
import UrlRecursive from '../UrlRecursive';

export default function FooterContainer(props) {
  const {url_api} = props;

  const linkPrivacyPolicy = _.isEmpty(url_api) ? '' : url_api.docs.privacyPolicy;
  const linkCondition = _.isEmpty(url_api) ? '' : url_api.docs.conditions;

  return (
    <UrlRecursive data={props}>
      <div className="footer">
        <SocialLink url_api={url_api} />
        <div className="policy">
          <a href={linkPrivacyPolicy} target="_blank" rel="noopener noreferrer">
            <span>Privacy Policy</span>
          </a>
          <span>|</span>
          <a href={linkCondition} target="_blank" rel="noopener noreferrer">
            <span>Terms & Conditions</span>
          </a>
        </div>
        <span className="version">v0.7.4 - 20220214</span>
      </div>
    </UrlRecursive>
  );
}
