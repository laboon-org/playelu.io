import React from 'react';
import _ from 'lodash';

function BoardTypeHunting(props) {
  const {urlApi} = props;

  return (
    <div className="board_type hunting">
      <div className="board_type-element">
        <img
          src={
            _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType3
          }
          alt=""
        />
        <div className="board_type-content">
          <div className="square"></div>
          <span>box</span>
        </div>
      </div>
      <div className="board_type-element active">
        <img
          src={
            _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType2
          }
          alt=""
        />
        <div className="board_type-content">
          <div className="circle"></div>
          <span>hex</span>
        </div>
      </div>
      <div className="board_type-element">
        <img
          src={
            _.isEmpty(urlApi) ? '' : urlApi.imageGamePlay.popupDrop.boardType5
          }
          alt=""
        />
        <div className="board_type-content">
          <div className="triangle"></div>
          <span>tria</span>
        </div>
      </div>
    </div>
  );
}

export default BoardTypeHunting;
