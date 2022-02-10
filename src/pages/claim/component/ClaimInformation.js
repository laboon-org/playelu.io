import React from 'react';

// TODO" Cho Nay Can Xu Ly Tot Hon
export default function ClaimInformation(props) {
  const {
    heading,
    placeholder,
    type,
    className,
  } = props;
  return (
    <div className='claim-information'>
      <span className='claim-information__heading'>
        {heading}
      </span>
      <div className='claim-information__input'>
        <input type={type} placeholder={placeholder} className={className} />
      </div>
    </div>

  );
}
