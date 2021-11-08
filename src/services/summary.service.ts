/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { People } from "../models/people.model";
import { Spend } from "../models/spend.model";
import { Summary } from "../models/summary.model";

function updateSummaryPeople(summary: Summary) {
    summary.countPeople++;
    return summary;
}

function updateSummarySpend(summary: Summary, spends: Spend[]):Summary  {
    console.log('summary -------> ', summary, spends)
    const sumSpend = spends.reduce((a, s) => a + s.value, 0);
    const spendPerPerson = (sumSpend / summary.countPeople) * -1;
    const people = spends.map(s => s.people);

    const peopleRecive = people.filter(
        p => {
            const spend = spends.find(s => s.people.id === p.id)
            if (!spend) {
                return false;
            }

            return spend.value > spendPerPerson;
        })

    return {...summary, spendPerPerson, peopleRecive};
}

export{
    updateSummaryPeople,
    updateSummarySpend
}