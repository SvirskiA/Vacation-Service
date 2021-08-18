import { createStore, combineReducers } from 'redux';

import vacationsReduser from './vacations-reduser/vacations-reduser';
import modalReduser from './modal-reduser/modal-reduser';

let reducers = combineReducers({
    vacationsReduser,
    modalReduser
})

const store = createStore(reducers);

export default store;
