import React from 'react';
<<<<<<< HEAD
import { Col, Container, Row } from 'react-bootstrap';
import LogoArea from '../../../components/presales/LogoArea';
=======

import Logo from '../../../components/presales/LogoArea';
>>>>>>> 66a46026f1f7d18deb57a2837c09e1bbeca53249
import ClaimBodyRight from './ClaimBody_right';

export default function ClaimBody(props) {
  return (
<<<<<<< HEAD
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

=======
    <div className="claim-body">
      <Logo />
      <ClaimBodyRight />
>>>>>>> 66a46026f1f7d18deb57a2837c09e1bbeca53249
    </div>
  );
}
