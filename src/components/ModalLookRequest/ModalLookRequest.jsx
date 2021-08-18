import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  restDaysActionCreater,
  deleteVacationActionCreater,
} from "../../store/vacations-reduser/vacations-AC";
import { setModalStatusAC } from "../../store/modal-reduser/modal-AC";

import VacationCard from "../VacationCard/VacationCard";
import Approvers from "../Approvers/Approvers";

const ModalLookRequest = () => {
  const dispatch = useDispatch();

  const { checkedVacation } = useSelector(
    ({vacationsReduser}) => vacationsReduser
  );

  const checkedVacationType = checkedVacation.type.toLowerCase().includes('vacation');

  const handleCancelClick = () => {
    checkedVacationType && dispatch(restDaysActionCreater(-checkedVacation.duration));
    dispatch(deleteVacationActionCreater());
    dispatch(setModalStatusAC(false));
  };

  const handleChangeClick = () => {
    if (checkedVacationType) {
      localStorage.setItem("duration", checkedVacation.duration);
      dispatch(restDaysActionCreater(-checkedVacation.duration));
    }

    dispatch(setModalStatusAC(true, "change"));
  };

  const handleCloseClick = () => {
    dispatch(setModalStatusAC(false));
  };

  return (
    <div>
      <div className="modalHeading">
        <p>
          {checkedVacation.type.toLowerCase().includes("vacation") &&
            "Request for vacation"}
          {checkedVacation.type.toLowerCase().includes("sick") &&
            "Sick leave request"}
          {checkedVacation.type.toLowerCase().includes("own") &&
            "Request for leave at own expense"}
        </p>
      </div>
      <VacationCard vacation={checkedVacation} />
      <Approvers vacation={checkedVacation} />
      <div className="modalFooter modalFooter__bold">
        {!checkedVacation.status.toLowerCase().includes("approved") && (
          <>
            <button
              className="button button_transparent bold"
              onClick={handleCancelClick}
            >
              {checkedVacation.type.toLowerCase().includes("sick")
                ? "cancel "
                : "decline "}
              request
            </button>
            <button
              className="button button_transparent bold"
              onClick={handleChangeClick}
            >
              Change
            </button>
          </>
        )}
        <button className="button button_dark bold" onClick={handleCloseClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalLookRequest;
