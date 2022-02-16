import React from 'react';
import _ from 'lodash';

import { Modal, Container, Row, Col } from 'react-bootstrap';
import BoxFeature from '../features/BoxFeature';
import BoxFeatureComingSoon from '../features/BoxFeatureComingSoon';

import './gp_modal.scss';
import './gp_modal_tablet.scss';
import './gp_modal_mobile.scss';

import './gp_modal_nest.scss';
import './gp_modal_nest_mobile.scss';

import UrlRecursive from '../../../../components/UrlRecursive';

export default function NestFeaturesModal(props) {
  const { show, onHide, urlApi } = props;

  const imgFramingMode = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.farming1;
  const imgBattlingMode = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupNest.battle;

  const imgMascot = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.coomingsoon;

  return (
    <UrlRecursive data={props}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        className="elu-modal-container nest-dialog"
      >
        <Modal.Header closeButton onClick={onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Game 2: Nest Features
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={6}>
                <BoxFeature
                  title={'Framing'}
                  image={imgFramingMode}
                  disabledControl={true}
                />
              </Col>
              <Col sm={6}>
                <BoxFeature
                  title={'Battling'}
                  image={imgBattlingMode}
                  disabledControl={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <BoxFeatureComingSoon
                  title={'Racing'}
                  notice={'Coming Soon'}
                  mascot={imgMascot}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </UrlRecursive>
  );
}
