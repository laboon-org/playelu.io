import React from 'react';

import './gp_control_elem.scss';

function ControlElem(props) {
  const {image, alt, clsType, isActivated, name} = props;

  return (
    <div className="control-elem">
      <img src={image} alt={alt} className="elem-image" />
      <div className="elem-content">
        <div
          className={[clsType, isActivated ? 'active' : 'inactive'].join(' ')}
        ></div>
        <div className="name">{name}</div>
      </div>
    </div>
  );
}

export default ControlElem;
