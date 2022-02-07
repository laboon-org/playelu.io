import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import WarningFragment from './WarningFragment';

import '../../scss/common/presale/logo_area.scss';

export default function LogoArea() {
  return (
    <Container className="presale-info-container">
      <Row>
        <WarningFragment />
      </Row>
      <Row className="header-sale">
        <Col sm={12} className="title">
          <div className="title-header">
            <div className="title-header-1">
              <span className="header-text">Welcome to</span>
              <span className="seed">pre-sale</span>
              <span className="header-text">Round</span>
            </div>
            <div className="title-header-2">
              <span className="boon-text">
                <a
                  href="https://playelu.io/gameplay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  $BOON
                </a>
              </span>
              <span className="header-text">token</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="logo">
        <Col className="logo-frame" sm={12}>
          <img
            className="elu-logo"
            src="https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/Logo-Elu%20verse.webp"
            alt=""
          />
          <img
            className="boon-coin"
            src="https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}
