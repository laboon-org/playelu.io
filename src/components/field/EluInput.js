import React from "react";

import './EluInput.scss';

function EluInput(props) {
  const { label, symbol, value, placeholder, icon, alt, onChange, inputStyle, symbolStyle } = props;
  return (
    <div className="contribute-sec">
      <div className="contribute-title">
        <p>{label}</p>
        <span className={["wallet-name", symbolStyle].join(" ")}>{symbol}</span>
      </div>
      <div className="input">
        <input
          className="input-text"
          type="text"
          name="name"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={inputStyle}
        />
        <img className="input-img" src={icon} alt={alt} />
      </div>
    </div>
  );
}

EluInput.defaultProps = {
  label: "Wallet Address: ",
  symbol: "Metamask",
  value: "0x...",
  placeholder: "0x...",
  icon: "https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp",
  alt: "Icon Metamask",
}

export default EluInput;