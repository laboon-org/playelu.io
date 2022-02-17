import React from 'react';

import TopMenu from './TopMenu';
import Cursor from '../../components/header/Cursor';
import ContractAddress from '../../components/header/ContractAddress';
import Sound from './Sound';
import NavbarMobile from '../../components/header/NavbarMobile';

export default function HeaderContainer(props) {
  const { url_api, sourceUrl } = props;
  return (
    <div className='header'>
      <TopMenu url_api={url_api} />
      <NavbarMobile url_api={url_api} />
      <ContractAddress url_api={url_api} />
      <Cursor />
      <Sound url_api={url_api} sourceUrl={sourceUrl} />
    </div>
  );
}
