import React from "react";
import { useSelector } from "react-redux";

import "./VacationDays.scss";

const VacationDays = () => {
  const days = useSelector(
    ( {vacationsReduser} ) => vacationsReduser.vacationsDaysCount
  );

  return (
    <div className="daysWrapper">
      <div className="daysWrapper__header">
        <p>Vacation Days</p>
      </div>
      <div className="daysWrapper__days">
        <div>Available</div>
        <div>{days}</div>
      </div>
      <div className="daysWrapper__details">
        <div className="daysWrapper__details__item rotate_item">»</div>
        <div className="daysWrapper__details__item">more details</div>
      </div>
    </div>
  );
};

export default VacationDays;
