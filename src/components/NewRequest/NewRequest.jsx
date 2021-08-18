import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  setVacationActionCreater,
  setCheckedVacationActionCreater
} from "../../store/vacations-reduser/vacations-AC";
import {
  setModalBodyAC,
  setModalStatusAC,
} from "../../store/modal-reduser/modal-AC";

import VacationCard from "../VacationCard/VacationCard";
import DateInput from "../DateInput/DateInput";
import DaysInput from "../DaysInput/DaysInput";

import chooseImg from "../../utils/chooseImg";
import checkSelectedPeriod from "../../utils/checkSelectedPeriod";
import duration from "../../utils/duration";

import "./NewRequest.scss";
import "../../public/assets/scss/buttons.scss";

const today = moment().format("YYYY-MM-DD");

const NewRequest = () => {
  const dispatch = useDispatch();

  const { vacations } = useSelector(
    ({ vacationsReduser }) => vacationsReduser
  );
  const vacation = useSelector(
    ({ vacationsReduser }) => vacationsReduser.newVacation
  );
  const { checkedVacation } = useSelector(
    ({ vacationsReduser }) => vacationsReduser
  );
  const { vacationsDaysCount } = useSelector(
    ({ vacationsReduser }) => vacationsReduser
  );
  const modalType = useSelector(({ modalReduser }) => modalReduser.modalType);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    vacation.created = Date.now();

    dispatch(setModalStatusAC(true, "submit"));

    const message = checkSelectedPeriod(vacation, vacations);
    dispatch(setModalBodyAC(message));

    form.reset();
  };

  const handleVacationChange = (name, value) => {
    if (modalType !== "change") {
      vacation[name] = value;

      if (!!vacation.start && !!vacation.end) {
        vacation.duration = duration(vacation.start, vacation.end);
      }

      vacation.type.toLowerCase().includes("sick")
        ? (vacation.status = "Pending confirmation")
        : (vacation.status = "Pending approval");

      dispatch(setVacationActionCreater({ ...vacation }));
    } else if (modalType === "change") {
      checkedVacation[name] = value;

      checkedVacation.duration = duration(
        checkedVacation.start,
        checkedVacation.end
      );

      dispatch(setCheckedVacationActionCreater({ ...checkedVacation }));
    }
  };

  const formWrapperClassName =
    modalType !== "change"
      ? "form-wrapper"
      : "form-wrapper__change";

  return (
    <div className="newRequestWrapper">
      <div className="vacation-type-img">
        {modalType !== "change" ? (
          <img src={chooseImg(vacation.type, true)} alt="vacation image" />
        ) : (
          <VacationCard vacation={checkedVacation} />
        )}
      </div>
      <div className={formWrapperClassName}>
        <div>
          <h2 className="newRequest__header">New Request</h2>
        </div>
        <form className="form" onSubmit={handleFormSubmit}>
          <div>
            <select
              disabled={modalType === "change"}
              className="newRequest__select-type input"
              defaultValue={
                modalType === "change" ? checkedVacation.type : "Vacation"
              }
              onChange={({ target: { value } }) => {
                handleVacationChange("type", value);
              }}
            >
              <option value="Vacation leave">Vacation leave</option>
              <option value="Sick leave">Sick leave</option>
              <option value="Own expense leave">Own expense leave</option>
            </select>
          </div>
          {vacation.type && vacation.type.toLowerCase().includes("sick") && (
            <div>
              <p className="sickMessage">
                <b>Important:</b> Please bring the official confirmation of your
                sick leave from a medical establishment to Personnel Officer
                (Katsiaryna Barysik) as soon as you get it.
              </p>
            </div>
          )}
          <div className="newRequest__date-wrapper">
            <div>
              <p className="date_label">
                Start Date{" "}
                <span className="date_label__comment">(inclusive)</span>
              </p>
              <DateInput
                handleVacationChange={handleVacationChange}
                period={"start"}
                minDate={today}
                isDisabled={modalType === "change" && today > checkedVacation.start}
              />
            </div>
            <div>
              <p className="date_label">
                End Date{" "}
                <span className="date_label__comment">(inclusive)</span>
              </p>
              <DateInput
                handleVacationChange={handleVacationChange}
                period={"end"}

                maxDate={moment(vacation.start).add(vacationsDaysCount - 1, "days").format("YYYY-MM-DD")}
                minDate={
                  modalType !== "change"
                    ? (vacation.start || today)
                    : (checkedVacation.start || today)
                }
              />
            </div>
            <DaysInput />
          </div>
          <div className="comment_wrapper">
            <p className="comment">Comment</p>
            <input type="text" className="comment_input input" />
          </div>
          {modalType !== "change" && (
            <div className="buttonsWrapper">
              <button className="button button_dark button_small" type="submit">
                Submit
              </button>
              <p className="paragraph">
                Have questions?{" "}
                <a className="link" href="">
                  Read FAQ
                </a>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewRequest;
