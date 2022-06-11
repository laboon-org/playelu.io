import React from 'react';
import _ from 'lodash';
import ControlElem from './ControlElem';

import './gp_board_type_control.scss';
function BoardTypeControl(props) {
  const {url_api} = props;

  const layout1 = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.popupDrop.boardType3;
  const layout2 = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.popupDrop.boardType2;
  const layout3 = _.isEmpty(url_api) ? '' : url_api.imageGamePlay.popupDrop.boardType5;

  return (
    <div className="board-type">
      <ControlElem image={layout1} alt={'Box'} clsType="square" name={'Box'} isActivated={true}/>
      <ControlElem
        image={layout2}
        alt={'Hex'}
        clsType="circle"
        name={'Hex'}
      />
      <ControlElem
        image={layout3}
        alt={'Tria'}
        clsType="triangle"
        name={'Tria'}
      />
    </div>
  );
}

export default BoardTypeControl;
