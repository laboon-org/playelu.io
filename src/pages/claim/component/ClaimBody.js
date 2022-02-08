import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoArea from '../../../components/presales/LogoArea';
import ClaimBodyRight from './ClaimBody_right';

export default function ClaimBody(props) {
  return (
    <div className='claim-body'>
      <Container>
        <Row className='claim-body__mobile'>
          <Col sm={12} xs={0} lg={4} md={5}>
            <LogoArea />
          </Col>
          <Col sm={12} xs={12} lg={8} md={7}>
            <ClaimBodyRight />
          </Col>
        </Row>
      </Container>

    </div>
  );
}
