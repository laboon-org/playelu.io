import React from 'react';

export default function Header() {
  return (
    <div className="header-sale">
      <a className="link-home" href="https://playelu.io/">
        <img
          className="home-icon"
          src="https://media.graphassets.com/j2S1gGpRc6Vawrb6CFXw"
          alt=""
        />
      </a>
      <div className="title">
        <div className="title-header">
          <div className="title-header-1">
            <span className="header-text">Welcome to </span>
            <span className="seed">pre-sale</span>
          </div>
          <div className="title-header-2">
            <span className="header-text">round - </span>
            <span className="boon-text">
              <a
                href="https://playelu.io/gameplay"
                target="_blank"
                rel="noopener noreferrer"
              >
                $BOON
              </a>
            </span>
            <span className="header-text">token</span>
          </div>
        </div>
      </div>
      <div className="gameplay-btn">
        <a href="https://playelu.io/gameplay">
          <span>Gameplay</span>
        </a>
      </div>
    </div>
  );
}
