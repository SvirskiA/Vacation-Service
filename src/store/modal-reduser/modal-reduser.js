import { SET_MODAL_STATUS, SET_MODAL_BODY } from "./modal-actions";

let initialState = {
    isModalActive: false,
    modalType: '',
    modalBody: '',
};

const modalReduser = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_MODAL_STATUS: {
            return {
                ...state,
                isModalActive: action.status,
                modalType: action.modalType,
            };
        }

        case SET_MODAL_BODY: {
            return {
                ...state,
                modalBody: action.body,
            };
        }

        default:
            return state;
    }
}

export default modalReduser;
