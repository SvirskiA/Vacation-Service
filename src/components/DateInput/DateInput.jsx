import React from "react";
import { useSelector } from "react-redux";

const DateInput = ({
  handleVacationChange,
  period,
  minDate,
  maxDate = null,
  isDisabled = false,
}) => {
  const modalType = useSelector(({ modalReduser }) => modalReduser.modalType);
  const vacation =
    modalType === "change"
      ? useSelector(({ vacationsReduser }) => vacationsReduser.checkedVacation)
      : useSelector(({ vacationsReduser }) => vacationsReduser.newVacation);

  const inputClassNamme = vacation.type.toLowerCase().includes("vacation")
    ? "input date_input_vacation"
    : "input date_input";

  const maxValue = vacation.type.toLowerCase().includes("vacation")
    ? maxDate
    : null;

  return (
    <input
      id={period}
      className={inputClassNamme}
      required
      disabled={isDisabled}
      min={minDate}
      max={maxValue}
      type="date"
      onChange={({ target: { value } }) => {
        handleVacationChange(period, value);
      }}
    />
  );
};

export default DateInput;
