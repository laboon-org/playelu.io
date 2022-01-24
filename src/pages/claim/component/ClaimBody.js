import React, {useState, useCallback} from 'react';
import Logo from '../../sale_page/component/logo';
import ClaimBodyRight from './ClaimBody_right';

export default function ClaimBody(props) {
  return (
    <div className='claim-body'>
      <Logo />
      <ClaimBodyRight />
    </div>
  );
}
