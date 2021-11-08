/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */

import { People } from "../models/people.model";
import { Spend } from "../models/spend.model";
import { Total, ReciveEnum} from "../models/total.model";

function addNewPerson(totalState: Total[], person: People): Total[] {
    totalState.push(
        new Total(
            person,
            0,
            0,
            ReciveEnum.no
        )
    )

    return calcTotalSpend(totalState)
}

function addNewSpend(totalState: Total[], spend: Spend) :Total[] {
    const total = totalState.find(t => t.people.id === spend.people.id)

    if (!total) {
        return totalState;
    }

    total.spendValue += spend.value;

    return calcTotalSpend(totalState);
}

function calcTotalSpend(totalState: Total[]){
    const sumSpend = totalState.reduce((a, t) => a + t.spendValue, 0);
    const spendPerPerson = (sumSpend / totalState.length) * -1;
    
    return totalState.map((item) => {
        const total = spendPerPerson + item.spendValue;
        item.totalValue = total;
        if( total === 0){
            item.isRecive = ReciveEnum.equal;
        }
        else {
            item.isRecive = total > 0 
            ? ReciveEnum.yes
            : ReciveEnum.no;
        }
        return item;
    })
}

export {
    addNewPerson,
    addNewSpend
}