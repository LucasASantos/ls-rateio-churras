import { BaseModel } from "./base.model";


export class People extends BaseModel{
    name: string;

    constructor(name:string) {
        super();
        this.name = name;
    }
}