import React, {useState, useLayoutEffect} from 'react';
import moment from 'moment';

import messageStorage from "../../../stores/messageStorage";

import WalletSelection from './WalletSelection';
import SaleStatusBar from '../../../components/presales/SaleStatusBar';
import WhiteListComingSoon from './modal/WhiteList_comingSoon';

const WhiteListRegistration = React.lazy(() =>
  import('./WhiteList_Registration'),
);
export default function WalletContainer(props) {
  const { showModalNotFound } = props;

  const [whiteListShow, setWhiteListShow] = useState(false);
  const [whiteListComingSoonShow, setWhiteListComingSoonShow] = useState(true);
  const [comingSoonTime, setComingSoon] = useState('');

  const showWhiteList = () => {
    setWhiteListShow(true);
  };

  const checkCountdown = () => {
    const CONFIG = messageStorage.getInstance().getMessage('config');
    let countdown = false;
    let countdownTime = '';
    if (CONFIG['Round Setting'] != null) {
      const data = CONFIG['Round Setting'].data;

      const index = data.findIndex((v, i, obj) => {
        if (moment(v.Start).add(1, 'days').isAfter(moment())) {
          return true;
        }
      });

      if (index != -1) {
        countdown = true;
        countdownTime = moment(data[index].Start).format('DD-MM-YYYY [00:00]');
      }
    }
    // console.log(countdown, countdownTime);

    if (countdown) {
      return countdownTime;
    } else {
      return '0';
    }
  };

  useLayoutEffect(() => {
    setComingSoon(checkCountdown());
  }, []);

  // console.log('STATE:', commingSoonTime);
  return (
    <div className="white-list__body--right">
      <SaleStatusBar name={'Seed'} price={'0.01'} percent={'100% (Reserved)'} />
      {/* <SaleStatusBar
        name={'Strategic'}
        price={'0.015'}
        percent={'In Progress'}
        cssClsLoaded={'loaded-50'}
      /> */}
      {whiteListComingSoonShow ? (
        !whiteListShow ? (
          <WalletSelection
            showWhiteList={showWhiteList}
            showModalNotFound={showModalNotFound}
          />
        ) : (
          <WhiteListRegistration />
        )
      ) : (
        <>
          <WhiteListComingSoon dateProp={comingSoonTime} />
        </>
      )}
    </div>
  );
}
