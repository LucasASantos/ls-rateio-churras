import { BaseModel } from "./base.model";
import { People } from "./people.model";


export class Total extends BaseModel {
    people: People;

    spendValue: number;

    totalValue: number;

    constructor(people:People, spendValue: number, totalValue: number) {
        super();
        this.people = people;
        this.spendValue = spendValue;
        this.totalValue = totalValue;
    }
}