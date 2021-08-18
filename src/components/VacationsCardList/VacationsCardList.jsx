import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setModalStatusAC } from "../../store/modal-reduser/modal-AC";
import { checkVacationActionCreater } from "../../store/vacations-reduser/vacations-AC";

import VacationCard from "../VacationCard/VacationCard";

import "./VacationsCardList.scss";

const VacationsCardList = () => {
  const dispatch = useDispatch();

  const vacations = useSelector(( {vacationsReduser} ) => vacationsReduser.vacations);

  const handleCardClick = (vacation) => {
      dispatch(setModalStatusAC(true, "look"));
      dispatch(checkVacationActionCreater(vacation.created))
  };

  const getYear = (date) => {
    return new Date(date).getFullYear();
  }

  const sortedVacations = vacations.sort((a, b) => {
    if (a.start > b.start) {
      return -1;
    }
    if (a.start < b.start) {
      return 1;
    }
    return 0;
  });
  
  return (
    <div className="vacationsCardRoot">
      <div className="cardListHeader">
        <p>My Leave Requests</p>
      </div>
      {sortedVacations &&
        sortedVacations.map((vacation, i) => (
          <React.Fragment key={i}>
            {i === 0 ||
            getYear(vacation.start) !==
              getYear(sortedVacations[i - 1].start) ? (
              <div className="year">{`${getYear(vacation.start)} Year`}</div>
            ) : null}
            <div
              onClick={() => handleCardClick(vacation)}
              className="cardWrapper"
            >
              <VacationCard vacation={vacation} i={i} />
            </div>
          </React.Fragment>
        ))}
      {vacations.length === 0 && (
        <div className="emptyWrapper">
          <img
            src="http://localhost:3005/assets/img/empty.png"
            alt="empty image"
          />
        </div>
      )}
    </div>
  );
};

export default VacationsCardList;
