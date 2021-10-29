/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Reducer } from "redux";
import { People } from "../../models/people.model";
import { Spend } from "../../models/spend.model";
import { Total } from "../../models/total.model";
import { BaseStates, BaseTypes } from "./base/base.types";

const INITIAL_STATE = {
    data: [],
    loading:false,
    error: false
};

const INITIAL_STATE_PEOPLE = {
    data: [{
        id:'6e40eb4c-20a0-4de8-b536-c6af2d9cdff3',
        name: 'Oo tal do LuCcA NoG'
    },
    {
        id:'6e40eb4c-20a0-4de8-b536-c6af635cdff3',
        name: 'Oo tal do LuCcA NoG boladão'
    },
    ],
    loading:false,
    error: false
};

function baseReduce(state: any, action: { type: any; }): any {
    switch(action.type){
        case BaseTypes.CREATE_REQUEST:
            return {...state, loading: true};
        case BaseTypes.CREATE_SUCCESS:
            return {...state, loading: false, error: false};
        case BaseTypes.CREATE_FAILURE:
            return {...state, loading: false, error: true};
        default:
            return state;
    }
}

const peopleReducer: Reducer<BaseStates<People>> = (state= INITIAL_STATE_PEOPLE, action: any) => baseReduce(state, action)
const spendReducer: Reducer<BaseStates<Spend>> = (state= INITIAL_STATE, action: any) => baseReduce(state, action);
const totalReducer: Reducer<BaseStates<Total>> = (state= INITIAL_STATE, action: any) => baseReduce(state, action);

export {
    peopleReducer,
    spendReducer,
    totalReducer
}