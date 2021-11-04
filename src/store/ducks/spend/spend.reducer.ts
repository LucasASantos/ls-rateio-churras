/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { Reducer } from "redux";
import { Spend } from "../../../models/spend.model";
import { BaseStates } from "../base/base.types";
import { SpendTypes } from "./spend.types";


const SPEND_INITIAL_STATE = {
    data: [],
    loading:false,
    error: false
};

function spendReduce(state: BaseStates<Spend> = SPEND_INITIAL_STATE, action: any): any {
    console.log(action.type ,state, action);
    
    switch(action.type){
        
        case SpendTypes.SPEND_CREATE:
            const data = [...state.data];
            if(action.payload.data){
                data.push(action.payload.data)
            }

            console.log('state com push ->>>',action.payload.state);
            
            return {...state, data, loading: true, error: false};
        default:
            return state;
    }
}

const spendReducer: Reducer<BaseStates<Spend>> = (state, action) => spendReduce(state, action);

export{
    spendReducer,
}