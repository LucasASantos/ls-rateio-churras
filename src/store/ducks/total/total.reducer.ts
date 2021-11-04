/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { Reducer } from "redux";
import { Total } from "../../../models/total.model";
import { BaseStates } from "../base/base.types";
import { SpendTypes } from "../spend/spend.types";
import * as TotalService from '../../../services/total.service'
import { PeopleTypes } from "../people/people.types";

const TOTAL_INITIAL_STATE = {
    data: [],
    loading:false,
    error: false
};

function totalReduce(state: BaseStates<Total> = TOTAL_INITIAL_STATE, action: any): any {
    console.log(action.type ,state, action);
    
    switch(action.type){
        case PeopleTypes.PEOPLE_CREATE_REQUEST:
            const totalPeople = [...state.data];
            TotalService.addNewPerson(totalPeople, action.payload.data)
            console.log('total do people --->', totalPeople);
            
            return {...state, data: totalPeople, loading: true, error: false};
        case SpendTypes.SPEND_CREATE:
            const totalSpend= [...state.data];
            TotalService.addNewSpend(totalSpend, action.payload.data);
            console.log('total do spend --->',totalSpend);
            
            return {...state, data: totalSpend, loading: true, error: false};
        default:
            return state;
    }
}

const totalReducer: Reducer<BaseStates<Total>> = (state, action) => totalReduce(state, action);

export{
    totalReducer,
}