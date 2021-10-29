import { combineReducers } from 'redux';

import * as reducer from './reducer';

export default combineReducers({
    people: reducer.peopleReducer,
    spend: reducer.spendReducer,
    total: reducer.totalReducer
});