import React, { useState } from "react";
import { useSelector } from "react-redux";

const questionIcon = "http://localhost:3005/assets/img/Question.svg";
const questionIconHover = "http://localhost:3005/assets/img/Question_.svg";

const DaysInput = () => {
  const [tooltipClassName, setTooltipClassName] = useState('tooltip__hiden');
  const [icon, setIcon] = useState(questionIcon);

  const modalType = useSelector(({ modalReduser }) => modalReduser.modalType);

  const vacation =
    modalType === "change"
      ? useSelector(({ vacationsReduser }) => vacationsReduser.checkedVacation)
      : useSelector(({ vacationsReduser }) => vacationsReduser.newVacation);

  const handleMouseIn = () => {
    setTooltipClassName('tooltip');
    setIcon(questionIconHover);
  }

  const handleMouseOut = () => {
    setTooltipClassName('tooltip__hiden');
    setIcon(questionIcon);
  }

  return (
    vacation.type.toLowerCase().includes("vacation") && (
      <div>
        <div className="dayInputWrapper">
          <p className="date_label">Day(s)</p>
          <img
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            className="dayInputHoverQustion"
            src={icon}
            alt=""
          />
          <div className={tooltipClassName}>
            <p className="tooltip_text">The days calculated here are calendar days: </p>
            <p className="tooltip_text">
              <b>Calendar days = Work days + Weekends</b>
            </p>
            <p>
              Number of days can be adjusted by Personnel Officer (Katsiaryna
              Barysik) in accordance with the current legislation.
            </p>
          </div>
        </div>
        <input
          className="input days_input"
          type="text"
          value={
            vacation.duration && vacation.duration > 0 ? vacation.duration : ""
          }
          readOnly
        />
      </div>
    )
  );
};

export default DaysInput;
