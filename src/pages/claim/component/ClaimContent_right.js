import React, { useState } from 'react';
import ClaimInformation from './ClaimInformation';


export default function ClaimContentright() {
  const [connectWallet, setConnectWallet] = useState(false);
  return (
    <div className='claim-right__frame'>
      <div className='claim-right__header'>
        <div className='claim-right__header--title'>
          <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp' alt='' />
          <span>
            BOON
          </span>
          <img src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp' alt='' />
        </div>
        <span className='claim-right__header--sub'>
          TOKEN CLAIM DASHBOARD
        </span>
      </div>
      <div className='claim-right__content'>
        <div className='claim-right__content__element'>
          <div className='address-wallet'>
            <span className='address-wallet__heading'>
              Address
            </span>
            <div className='address-wallet__input'>
              <img className='address-wallet__input-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/meta-icon.webp' alt='' />
              <input type='text' placeholder='Connect your wallet' />
            </div>
          </div>
        </div>
        <div className='claim-right__content__element'>
          <ClaimInformation
            heading='Total Allocation'
            placeholder='0.00'
          />
          <ClaimInformation
            heading='Total Claimed to Date'
            placeholder='0.00'
          />
        </div>
        <div className='claim-right__content__element'>
          <ClaimInformation
            heading='Claimable Now'
            placeholder='0.00'
          />
          <ClaimInformation
            heading='Unvested'
            placeholder='0.00'
          />
        </div>
        <div className='claim-right__content__btn'>
          {
            !connectWallet ?
              <div className='claim-right__btn' onClick={(e) => {
                setConnectWallet(true);
              }}>
                <span> Select Wallet</span>
              </div> :
              <div className='claim-token'>
                <div className='claim-right__btn--token'>
                  <span> Claim Token</span>
                </div>

                <div className='claim-right__btn--disconnect mr-left5'>
                  <span>Disconnect  </span>
                </div>
              </div>
          }
        </div>
        <span className='claim-notification'>
          * You need a one time fee of 0.003 AVAX to create your $BOON token account in your wallet
        </span>
        <div className='claim-right__content__element'>
          <ClaimInformation
            heading='Next Unlock Date'
            placeholder="dd-mm-yyyy"
            type="date"
            className="padding-left"
          />
          <ClaimInformation
            heading='Next Unlock Amount'
            placeholder='0.00'
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
