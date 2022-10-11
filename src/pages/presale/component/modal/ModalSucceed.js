import React from 'react';
import './_modal.scss';
import './_responsive.scss';

export default function ModalSucceed(props) {
  const {forwardBack, amount, deposit} = props;
  return (
    <div className="modal-succeed">
      <span className="modal-succeed__heading">Succeeded!</span>
      <div className="modal-succeed__body">
        <img
          className="modal-succeed__body__img"
          src="https://media.graphassets.com/74I13I2TQNyUz3urkhEQ"
          alt=""
        />

        <div className="modal-succeed__body__content">
          Congratulations on your successful purchase of {amount}
          <span className="modal-succeed__body__content__boon">$BOON</span>, for{' '}
          {deposit}
          <span className="modal-succeed__body__content__avax">AVAX</span>, in
          the &quot;Seed&quot; round.
        </div>
      </div>
      <a
        className="modal_succeed__link-gameplay"
        href="https://playelu.io/gameplay"
        target="_blank"
        rel="noreferrer"
      >
        <span>Link: https://playelu.io/gameplay#nest</span>
      </a>
      <div
        className="modal-succeed__btn"
        onClick={() => {
          forwardBack();
        }}
      >
        <span>ok</span>
      </div>
    </div>
  );
}
