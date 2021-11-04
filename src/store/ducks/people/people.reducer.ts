/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from "redux";
import { People } from "../../../models/people.model";
import { BaseStates } from "../base/base.types";
import { PeopleTypes } from "./people.types";

const INITIAL_STATE_PEOPLE = {
    data: [],
    loading:false,
    error: false
};

function peopleReduce(state: BaseStates<People> = INITIAL_STATE_PEOPLE, action: any): any {
    console.log(action.type ,state, action);
    
    switch(action.type){
        case PeopleTypes.PEOPLE_CREATE_REQUEST:
            const data = [...state.data];
            if(action.payload.data){
                data.push(action.payload.data)
            }
            return {...state, data, loading: true, error: false};
        default:
            return state;
    }
}

const peopleReducer: Reducer<BaseStates<People>> = (state, action) => peopleReduce(state, action);

export{
    peopleReducer,
}