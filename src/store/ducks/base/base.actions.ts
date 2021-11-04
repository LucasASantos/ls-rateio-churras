/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {action} from 'typesafe-actions';
import { PeopleTypes } from '../people/people.types';
import { SpendTypes } from '../spend/spend.types';
import { BaseTypes } from './base.types';


export const loadRequest = () => action(BaseTypes.LOAD_REQUEST);
export const createRequest = (data: any) => action(BaseTypes.CREATE_REQUEST, data);
export const createPeopleRequest = (data: any) => action(PeopleTypes.PEOPLE_CREATE_REQUEST, data);
export const createSpendRequest = (data: any) => action(SpendTypes.SPEND_CREATE, data);
