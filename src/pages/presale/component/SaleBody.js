import React, { useState, useCallback } from "react";

import BodyRight from "./bodyRight";
import LogoArea from "../../../components/presales/LogoArea";
import NotfoundModal from "./modal/NotFoundModal";

export default function SaleBody(props) {
  const { changeStateWarning } = props;
  const [notfound, setNotfound] = useState(false);
  const showModalNotFound = useCallback(() => {
    setNotfound(true);
  });

  return (
    <div className="sale-body">
      {!notfound ? (
        <>
          <LogoArea />
          <BodyRight
            changeStateWarning={changeStateWarning}
            showModalNotFound={showModalNotFound}
          />
        </>
      ) : (
        <NotfoundModal />
      )}
    </div>
  );
}
