import React from 'react';
import {useState} from 'react';
import _ from 'lodash';
import {Modal, Container, Row, Col} from 'react-bootstrap';
import BoxFeature from './../features/BoxFeature';
import BoxFeatureComingSoon from './../features/BoxFeatureComingSoon';

import './gp_modal.scss';

import UrlRecursive from './../../../../components/UrlRecursive';

// import OnboardingComingsoon from "./onboarding_comingsoon";
// import OnBoardingTip from "./OnBoarding_tip";

export default function DropFeaturesModal(props) {
  const {dropShow, onPressHideEluDrop, urlApi} = props;

  const imgCompetingMode = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.competing;
  const imgHuntingMode = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.HuntHexBoard;
  const imgAdventureMode1 = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.adventure;
  const imgAdventureMode2 = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.adventure1;

  const imgMascot = _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.coomingsoon;

  return (
    <UrlRecursive data={props}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={dropShow}
        className="elu-modal-container"
      >
        <Modal.Header closeButton onClick={onPressHideEluDrop}>
          <Modal.Title id="contained-modal-title-vcenter">
            Game 1: Drop Features
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={6}>
                <BoxFeature title={'Competing'} image={imgCompetingMode} />
              </Col>
              <Col sm={6}>
                <BoxFeature title={'Hunting'} image={imgHuntingMode} />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <BoxFeature
                  title={'Adventure 1'}
                  image={imgAdventureMode1}
                  disabledControl={true}
                />
              </Col>
              <Col sm={6}>
                <BoxFeature
                  title={'Adventure 2'}
                  image={imgAdventureMode2}
                  disabledControl={true}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <BoxFeatureComingSoon
                  title={'Versus'}
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
