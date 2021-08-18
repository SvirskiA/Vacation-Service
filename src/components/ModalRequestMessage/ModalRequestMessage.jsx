import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addVacationActionCreater,
  changedVacationActionCreater,
  restDaysActionCreater,
} from "../../store/vacations-reduser/vacations-AC";

import { setModalStatusAC } from "../../store/modal-reduser/modal-AC";

import VacationCard from "../VacationCard/VacationCard";

const ModalRequestMessage = () => {
  const dispatch = useDispatch();

  const modalBody = useSelector(({ modalReduser }) => modalReduser.modalBody);
  const modalType = useSelector(({ modalReduser }) => modalReduser.modalType);

  const vacation = modalType === "submit"
      ? useSelector(({ vacationsReduser }) => vacationsReduser.newVacation)
      : useSelector(({ vacationsReduser }) => vacationsReduser.checkedVacation);

  const handleCancelClick = () => {
    modalType !== "submit-changes"
      ? dispatch(setModalStatusAC(false, null))
      : dispatch(setModalStatusAC(true, 'change'));
  };

  const handleConfirmClick = () => {
    if (vacation.type.toLowerCase().includes("vacation")) {
      dispatch(restDaysActionCreater(vacation.duration));
    }

    dispatch(setModalStatusAC(false, null));

    modalType === "submit"
      ? dispatch(addVacationActionCreater())
      : dispatch(changedVacationActionCreater());
  };

  return (
    <div>
      <div className="modalHeading">
        <p>{`Request a ${vacation.type.toLowerCase()}`}</p>
      </div>
      <p className="message warningMessage">{modalBody.warning}</p>
      <p className="message">{modalBody.text}</p>
      <VacationCard vacation={vacation} />
      <div className="modalFooter">
        <button className="button button_light" onClick={handleCancelClick}>
          {modalBody.buttons.negative}
        </button>
        {modalBody.buttons.positive && (
          <button className="button button_dark" onClick={handleConfirmClick}>
            {modalBody.buttons.positive}
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalRequestMessage;
