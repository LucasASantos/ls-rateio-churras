/* eslint-disable no-shadow */
export enum BaseTypes {
    CREATE_SUCCESS = 'CREATE_SUCCESS',
    CREATE_REQUEST = 'CREATE_REQUEST',
    CREATE_FAILURE = 'CREATE_FAILURE'
}

export interface BaseStates<T>{
    readonly data: T[];
    readonly loading: boolean;
    readonly error: boolean;
}