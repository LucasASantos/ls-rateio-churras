import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { People } from '../models/people.model';
import { Spend } from '../models/spend.model';
import { Summary } from '../models/summary.model';
import { Total } from '../models/total.model';
import { BaseStates } from './ducks/base/base.types';
import rootReducer from './ducks/rootReducer'



export interface ApplicationState {
  people: BaseStates<People>,
  spend: BaseStates<Spend>,
  total: BaseStates<Total>
  summary: BaseStates<Summary>
}

// const store: Store<ApplicationState> = createStore(rootReducer);

const store: Store<ApplicationState> = createStore(rootReducer, composeWithDevTools());

export * as Actions from './ducks/base/base.actions';
export default store;