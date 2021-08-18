import { SET_MODAL_STATUS, SET_MODAL_BODY } from "./modal-actions";

export const setModalStatusAC = (status, modalType) => ({
    type: SET_MODAL_STATUS,
    status,
    modalType
});

export const setModalBodyAC = (body) => ({
    type: SET_MODAL_BODY,
    body
});