import {
    SET_VACATION, 
    ADD_VACATION,
    CHECK_VACATION,
    SET_CHECKED_VACATION,
    CHANGE_VACATION,
    DELETE_VACATION,
    REST_DAYS
} from "./vacations-actions";

let initialState = {
    vacations: [
        // hard-code for test
        // { type: 'Vacation', created: 1576108800001, start: '01.01.20', end: '01.07.20', duration: 7, status: 'Approved and registered' },
    ],
    newVacation: {type: 'Vacation'},
    checkedVacation: '',
    vacationsDaysCount: 50,
};

const vacationsReduser = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_VACATION: {
            return {
                ...state,
                newVacation: action.vacation
            }
        }

        case ADD_VACATION: {
            return {
                ...state,
                vacations: [...state.vacations, state.newVacation],
                newVacation: {type: 'Vacation'},
            }
        }

        case CHECK_VACATION: {
            return {
                ...state,
                checkedVacation: {...state.vacations.find(v =>
                    v.created === action.created
                )},
            }
        }

        case SET_CHECKED_VACATION: {
            return {
                ...state,
                checkedVacation: action.vacation
            }
        }

        case CHANGE_VACATION: {
            return {
                ...state,
                vacations: state.vacations.map(v => {
                    if (v.created === state.checkedVacation.created) {
                        v = state.checkedVacation
                    }
                    return v;
                })
            }
        }

        case DELETE_VACATION: {
            return {
                ...state,
                vacations: state.vacations.filter(v => {
                    if (v.created === state.checkedVacation.created) {
                        return
                    }
                    return v;
                })
            }
        }

        case REST_DAYS: {
          return {
                ...state,
                vacationsDaysCount: state.vacationsDaysCount - action.days,
            }
        }

        default:
            return state;
    }
}

export default vacationsReduser;
