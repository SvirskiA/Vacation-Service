import React from "react";
import { useSelector } from "react-redux";

import chooseImg from "../../utils/chooseImg";
import getFormattedDate from "../../utils/getFormattedDate";

import "./VacationCard.scss";

const VacationCard = ({ vacation, i }) => {
  const modalType = useSelector(({ modalReduser }) => modalReduser.modalType);

  const wrapperClassName = i % 2 === 0 ? "vacationCard" : "vacationCard odd";

  const vacationMainInfoClassName = `vacationMainInfo ${
    modalType === "submit" ? "vacationMainInfoSubmit" : ""
  }`;

  const statusClassName = vacation.status.toLowerCase().includes("approved")
    ? "statusClassList approved"
    : "statusClassList";

  const vacationDuration = vacation.type.toLowerCase().includes("vacation")
    ? `(${vacation.duration} days)`
    : "";

  const vacationType = modalType !== "submit" ? `${vacation.type}: ` : "";

  const vacationMainInfoText = `${vacationType}${getFormattedDate(
    vacation.start
  )} - ${getFormattedDate(vacation.end)} ${vacationDuration}`;

  const vacationCreated = vacation.changed
    ? `Changed: ${getFormattedDate(vacation.changed)}`
    : `Created: ${getFormattedDate(vacation.created)}`;

  return (
    <div className={wrapperClassName}>
      <div>
        <img
          src={chooseImg(vacation.type, false)}
          className="vacationTypeImg"
          alt="vacation image"
        />
      </div>
      <div>
        <p className={vacationMainInfoClassName}>{vacationMainInfoText}</p>
        {modalType !== "submit" && (
          <p className="createInfo">{vacationCreated}</p>
        )}
        <p className={statusClassName}>{vacation.status}</p>
      </div>
    </div>
  );
};

export default VacationCard;
