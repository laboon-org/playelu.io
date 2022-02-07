import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import '../../scss/common/presale/sale_status_bar.scss';

export default function SaleStatusBar(props) {
  const {name, price, percent, cssClsLoaded} = props;

  // targetSale, currentSale;

  return (
    <Container className="sale_bar_container">
      <Row>
        <Col sm={2} className="name">
          {name}
        </Col>
        <Col sm={8} className="bar-bg-box">
          <div className="bar-bg"></div>
          <div className={['bar-bg loaded', cssClsLoaded].join(' ')}></div>
          <div className={['bar-percent'].join(' ')}>
            {percent}
          </div>
        </Col>
        <Col sm={2} className="price">
          ({price}$)
        </Col>
      </Row>
    </Container>
  );
}
