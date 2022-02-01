import React from 'react';
import _ from 'lodash';

import TopMenu from './TopMenu';
import Cursor from '../../components/header/Cursor';
import ContractAddress from '../../components/header/ContractAddress';
import Sound from '../../components/header/Sound';
import NavbarMobile from '../../components/header/NavbarMobile';

export default function HeaderContainer(props) {
  const {urlApi} = props;
  return (
    <div>
      <TopMenu urlApi={urlApi} />
      <NavbarMobile urlApi={urlApi} />
      <ContractAddress urlApi={urlApi} />
      <Cursor />
      <Sound urlApi={urlApi} />
    </div>
  );
}
