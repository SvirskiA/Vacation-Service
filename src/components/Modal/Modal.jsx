import React from "react";
import { useSelector } from "react-redux";

import "./Modal.scss";
import "../../public/assets/scss/buttons.scss";

const Modal = ( {children} ) => {
  const active = useSelector(({modalReduser}) => modalReduser.isModalActive);

  return (
    <div className={active ? "modalWrapper active" : "modalWrapper"}>
      <div className={active ? "modal__content active" : "modal__content"}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
