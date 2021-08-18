import {
    SET_VACATION, 
    ADD_VACATION,
    CHECK_VACATION,
    SET_CHECKED_VACATION,
    CHANGE_VACATION,
    DELETE_VACATION,
    REST_DAYS
} from "./vacations-actions";

export const setVacationActionCreater = (vacation) => ({
    type: SET_VACATION,
    vacation
});
export const addVacationActionCreater = () => ({
    type: ADD_VACATION
});
export const checkVacationActionCreater = (created) => ({
    type: CHECK_VACATION,
    created
});
export const setCheckedVacationActionCreater = (vacation) => ({
    type: SET_CHECKED_VACATION,
    vacation
});
export const changedVacationActionCreater = () => ({
    type: CHANGE_VACATION
});
export const deleteVacationActionCreater = () => ({
    type: DELETE_VACATION
});
export const restDaysActionCreater = (days) => ({
    type: REST_DAYS,
    days
});
