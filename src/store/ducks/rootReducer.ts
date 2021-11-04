import { combineReducers } from 'redux';

import { peopleReducer } from './people/people.reducer';
import { spendReducer } from './spend/spend.reducer';
import { totalReducer } from './total/total.reducer';

export default combineReducers({
    people: peopleReducer,
    spend: spendReducer,
    total: totalReducer
});