/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { Reducer } from "redux";
import { Summary } from "../../../models/summary.model";
import { BaseStates } from "../base/base.types";
import { SpendTypes } from "../spend/spend.types";
import * as SummaryService from '../../../services/summary.service';
import { PeopleTypes } from "../people/people.types";

const SUMMARY_INITIAL_STATE : BaseStates<Summary>  = {
    data: [
        {
            id: 'b4fcb9db-0158-44d8-bbb2-2b4c8c5cf3bd',
            countPeople: 0,
            peopleRecive: [],
            spendPerPerson: 0,  
        }
    ],
    loading:false,
    error: false
};

function summaryReduce(state: BaseStates<Summary> = SUMMARY_INITIAL_STATE, action: any): any {
    console.log('summary reducer ->>>>>>>>>>', action.type ,state, action);
    
    switch(action.type){
        case PeopleTypes.PEOPLE_CREATE_REQUEST:
            const summaryPeople = [...state.data];
            SummaryService.updateSummaryPeople(summaryPeople[0])
            console.log('summary do people --->', summaryPeople);
            
            return {...state, data: summaryPeople, loading: true, error: false};
        case SpendTypes.SPEND_CREATE:
            const summarySpend= [...state.data];
            SummaryService.updateSummarySpend(summarySpend[0], action.payload.state);
            console.log('summary do spend --->',summarySpend);
            
            return {...state, data: summarySpend, loading: true, error: false};
        default:
            return state;
    }
}

const summaryReducer: Reducer<BaseStates<Summary>> = (state, action) => summaryReduce(state, action);

export{
    summaryReducer,
}

