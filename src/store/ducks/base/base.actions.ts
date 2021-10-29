/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {action} from 'typesafe-actions';
import { BaseTypes } from './base.types';


export const createSuccess = () => action(BaseTypes.CREATE_SUCCESS);
export const createRequest = () => action(BaseTypes.CREATE_REQUEST);
export const createFailure = () => action(BaseTypes.CREATE_FAILURE);
