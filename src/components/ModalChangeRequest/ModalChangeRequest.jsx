import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setModalBodyAC,
  setModalStatusAC,
} from "../../store/modal-reduser/modal-AC";

import { restDaysActionCreater } from "../../store/vacations-reduser/vacations-AC";

import NewRequest from "../NewRequest/NewRequest";

import checkSelectedPeriod from "../../utils/checkSelectedPeriod";

const ModalChangeRequest = () => {
  const dispatch = useDispatch();

  const { vacations } = useSelector(
    ({ vacationsReduser }) => vacationsReduser
  );

  const { checkedVacation } = useSelector(
    ({ vacationsReduser }) => vacationsReduser
  );

  const checkedVacationType = checkedVacation.type.toLowerCase().includes('vacation');

  const handleFormSubmit = () => {
    checkedVacation.changed = Date.now();

    dispatch(setModalStatusAC(true, "submit-changes"));

    const message = checkSelectedPeriod(checkedVacation, vacations);
    dispatch(setModalBodyAC(message));
  };

  const handleCancelClick = () => {
    if (checkedVacationType) {
      const savedDuration = localStorage.getItem('duration')
      dispatch(restDaysActionCreater(savedDuration));
    }
    dispatch(setModalStatusAC(false));
  };

  return (
    <div>
      <div className="modalHeading">
        <p>Change request</p>
      </div>
      <NewRequest />
      <div className="modalFooter modalFooter__bold">
        <button
          onClick={handleCancelClick}
          className="button button_transparent"
        >
          cancel
        </button>
        <button 
          onClick={handleFormSubmit} 
          className="button button_dark">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default ModalChangeRequest;
