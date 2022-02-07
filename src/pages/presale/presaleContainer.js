import React from 'react';

import Header from './component/Header';
import SaleBody from './component/SaleBody';

import "../../scss/page_presale/presale.scss";
import "../../scss/page_presale/presale_tablet.scss";
import "../../scss/page_presale/presale_mobile.scss";
import {
  Web3ReactProvider,
} from '@web3-react/core';

import {Web3Provider} from '@ethersproject/providers';
import WarningFragment from "../../components/presales/WarningFragment";
import {useState} from 'react';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// Steve Le: Uppercase Component Name for ensure Hook get no warning at all.
export default function PresaleContainer() {
  const [showWarrning, setShowWarrning] = useState(false);

  const changeStateWarning = (bool) => {
    setShowWarrning(bool);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="sale">
        <Header />
        {showWarrning && (
          <WarningFragment changeStateWarning={changeStateWarning} />
        )}
        <SaleBody changeStateWarning={changeStateWarning} />
      </div>
    </Web3ReactProvider>
  );
}
