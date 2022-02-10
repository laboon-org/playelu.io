import React, {useState} from 'react';
import ClaimModal from './Claim_ComingSoonModal';
import ClaimContentRight from './ClaimContent_right';


export default function ClaimBodyRight() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <div className='claim-right'>
      <span className='claim--shadow'></span>
      {
        showComingSoon ?
          <ClaimModal /> :
          <ClaimContentRight />
      }
    </div>
  );
}
