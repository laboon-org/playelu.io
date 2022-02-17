import React from "react";

import './EluInput.module.scss';

export default function EluInput(props) {
  const { label, symbol, value, placeholder, icon, alt } = props;
  return (
    <div className="contribute-sec">
      <div className="contribute-title">
        <p>{label}</p>
        <span className="wallet-name">{symbol}</span>
      </div>
      <div className="input">
        <input
          className="input-text"
          type="text"
          name="name"
          value={value}
          placeholder={placeholder}
        />
        <img className="input-img" src={icon} alt={alt} />
      </div>
    </div>
  );
}
