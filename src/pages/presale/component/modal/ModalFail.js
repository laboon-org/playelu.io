import React from 'react';

export default function ModalFail(props) {
  const {message, forwardBack} = props;
  return (
    <div className='modal-fail'>
      <span className='modal-fail__heading modal-succeed__heading'>
                failure!
      </span>
      <div className='modal-succeed__body'>
        <img
          className='modal-succeed__body__img'
          src='https://media.graphassets.com/74I13I2TQNyUz3urkhEQ'
          alt=''
        />
        <span className='modal-fail__body__content'>
          {message ? message : 'Transaction error. Please try again.'}
        </span>
      </div>
      <div
        className='modal-succeed__btn'
        onClick={() => {
          forwardBack();
        }}
      >
        <span>Try Again</span>
      </div>
    </div>
  );
}
