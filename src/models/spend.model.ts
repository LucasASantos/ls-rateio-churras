import { BaseModel } from "./base.model";
import { People } from "./people.model";


export class Spend extends BaseModel {
    people: People;

    value: number;

    constructor(people: People, value: number) {
        super();
        this.people=people;
        this.value=value;
    }
}