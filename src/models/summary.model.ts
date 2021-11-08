import { BaseModel } from "./base.model";
import { People } from "./people.model";

export class Summary extends BaseModel {
    countPeople : number;

    peopleRecive: People[];

    spendPerPerson: number;


    constructor(
        countPeople: number, 
        peopleRecive: People[],
        spendPerPerson: number
    ) {
        super();
        this.countPeople = countPeople
        this.peopleRecive = peopleRecive
        this.spendPerPerson = spendPerPerson
    }
}