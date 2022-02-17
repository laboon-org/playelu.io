import React from 'react';
import _ from 'lodash';
import { Image } from 'react-bootstrap';

import './gp_box_feature.scss';
import './gp_box_feature_mobile.scss';

import UrlRecursive from './../../../../components/UrlRecursive';
import BoardTypeControl from '../controls/BoardTypeControl';

export default function BoxFeature(props) {
  const { title, image, disabledControl, url_api } = props;

  return (
    <UrlRecursive data={props}>
      <div className="elu-box-feature">
        <div className="feat-container">
          <div className="title">
            <div className="title-bg">{title}</div>
          </div>
          <Image className="image" fluid src={image}></Image>
          {!disabledControl && (
            <div className="layout">
              <BoardTypeControl urlApi={urlApi} />
            </div>
          )}
        </div>
      </div>
    </UrlRecursive>
  );
}
