import { Action } from '@ngrx/store';
import { Weather, Result } from '../../../model/weather';

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
export const CITY_SEARCH = 'CITY_SEARCH';
export const CITY_SEARCH_SUCCESS = 'CITY_SEARCH_SUCCESS';
export const CITY_SEARCH_FAIL = 'CITY_SEARCH_FAIL';
export const DELETE_CITIES = 'DELETE_CITIES';
export const DELETE_CITIES_SUCCESS = 'DELETE_CITIES_SUCCESS';

export class CitySearchAction implements Action {
    readonly type = CITY_SEARCH;
    constructor(public payload: string) { }
}
export class CitySearchSuccessAction implements Action {
    readonly type = CITY_SEARCH_SUCCESS;
    constructor(public payload: any) { }
}

export class CitySearchFailAction implements Action {
    readonly type = CITY_SEARCH_FAIL;
    constructor(public payload: any) { }
}

export class DeleteCityAction implements Action {
    readonly type = DELETE_CITIES;

    constructor(public payload: number) { }
}

export class DeleteCityActionSuccess implements Action {
    readonly type = DELETE_CITIES_SUCCESS;

    constructor(public payload: Result[]) { }
}


export type Actions
    = CitySearchAction
    | CitySearchSuccessAction
    | CitySearchFailAction
    | DeleteCityAction
    | DeleteCityActionSuccess;

