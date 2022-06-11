import React from 'react';
import '../../../presale/component/modal/_modal.scss';
import '../../../presale/component/modal/_responsive.scss';

export default function ModalSucceed(props) {
  const {
    type,
  } = props;
  //* Component
  const SucceedState = () => {
    return (
      <div>
        <span className='modal-succeed__heading white-list__succeed__heading'>CONGRATULATION</span>
        <span className='white-list__succeed__sub'>You have registered successfully.</span>
      </div>
    );
  };
  const SignedState = () => {
    return (
      <div>
        <span className='modal-succeed__heading white-list__succeed__heading'>Sorry !!!
        </span>
        <span className='white-list__succeed__sub'>Your wallet address was already inside registered white list. You’d like to update the info, please contact AGENCY to get more support (hi@playelu.io)
        </span>
      </div>
    );
  };

  const ContentRender = () => {
    switch (type) {
      case 'SUCCEED': {
        return (
          <SucceedState></SucceedState>
        );
      }
      case 'ALREADY_SIGNED': {
        return (
          <SignedState></SignedState>
        );
      }
      default: {
        return (
          <div></div>
        );
      }
    }
  };

  return (
    <div className='contribute'>
      <span className='contribute--shadow'></span>
      <div className='contribute-frame white-list_succceed__frame'>
        <div className='modal-succeed white-list__succeed'>
          <img
            className='white-list__succeed__img'
            src='https://media.graphassets.com/je7RSQoyRmKTYqLJHhfP'
            alt=''
          />
          <div className='modal-succeed__body__content white-list__succeed__content'>
            <ContentRender />
          </div>
        </div>
      </div>
    </div>
  );
}
