/* eslint-disable no-shadow */
import { BaseModel } from "./base.model";
import { People } from "./people.model";

export enum ReciveEnum{
    yes = 'A receber',
    no = 'A restituir',
    equal = 'Nada a fazer'
}
export class Total extends BaseModel {
    people: People;

    spendValue: number;

    totalValue: number;

    isRecive: ReciveEnum;

    constructor(
        people:People, 
        spendValue: number, 
        totalValue: number, 
        isRecive: ReciveEnum,
        ) {
        super();
        this.people = people;
        this.spendValue = spendValue;
        this.totalValue = totalValue;
        this.isRecive = isRecive;
    }
}