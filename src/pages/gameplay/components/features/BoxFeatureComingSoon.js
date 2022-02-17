import React from 'react';
import _ from 'lodash';
import { Image } from 'react-bootstrap';

import './gp_box_feature_coming_soon.scss';
import './gp_box_feature_coming_soon_mobile.scss';

import UrlRecursive from '../../../../components/UrlRecursive';

export default function BoxFeatureComingSoon(props) {
  const { title, notice, mascot, urlApi } = props;

  return (
    <UrlRecursive data={props}>
      <div className="elu-box-feature-coming-soon">
        <div className="feat-container">
          <div className="title">
            <div className="title-bg">{title}</div>
          </div>
          <div className="content">
            <div className="notice">{notice}</div>
            <Image className="mascot" fluid src={mascot}></Image>
          </div>
        </div>
      </div>
    </UrlRecursive>
  );
}
